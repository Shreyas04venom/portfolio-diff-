import { db } from "../config/firebase";
import { collection, addDoc, serverTimestamp, query, where, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

/**
 * Save contact form submission to Firestore
 * @param {Object} contactData - The contact form data
 * @param {string} contactData.name - Sender's name
 * @param {string} contactData.email - Sender's email
 * @param {string} contactData.message - Sender's message
 * @returns {Promise<string>} - Document ID of the saved submission
 */
export const saveContactSubmission = async (contactData) => {
  try {
    const docRef = await addDoc(collection(db, "contact_submissions"), {
      name: contactData.name,
      email: contactData.email,
      message: contactData.message,
      timestamp: serverTimestamp(),
      createdAt: new Date().toLocaleString(),
      isRead: false
    });
    console.log("✅ Contact submission saved with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("❌ Error saving contact submission:", error);
    throw error;
  }
};

/**
 * Get all contact submissions
 * @returns {Promise<Array>} - Array of contact submissions
 */
export const getAllContactSubmissions = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "contact_submissions"));
    const submissions = [];
    querySnapshot.forEach((doc) => {
      submissions.push({ id: doc.id, ...doc.data() });
    });
    return submissions;
  } catch (error) {
    console.error("❌ Error fetching submissions:", error);
    throw error;
  }
};

/**
 * Get unread contact submissions
 * @returns {Promise<Array>} - Array of unread submissions
 */
export const getUnreadSubmissions = async () => {
  try {
    const q = query(collection(db, "contact_submissions"), where("isRead", "==", false));
    const querySnapshot = await getDocs(q);
    const submissions = [];
    querySnapshot.forEach((doc) => {
      submissions.push({ id: doc.id, ...doc.data() });
    });
    return submissions;
  } catch (error) {
    console.error("❌ Error fetching unread submissions:", error);
    throw error;
  }
};

/**
 * Delete a contact submission
 * @param {string} submissionId - The ID of the submission to delete
 * @returns {Promise<void>}
 */
export const deleteContactSubmission = async (submissionId) => {
  try {
    await deleteDoc(doc(db, "contact_submissions", submissionId));
    console.log("✅ Submission deleted:", submissionId);
  } catch (error) {
    console.error("❌ Error deleting submission:", error);
    throw error;
  }
};

/**
 * Mark submission as read
 * @param {string} submissionId - The ID of the submission to mark as read
 * @returns {Promise<void>}
 */
export const markAsRead = async (submissionId) => {
  try {
    const submissionRef = doc(db, "contact_submissions", submissionId);
    await updateDoc(submissionRef, { isRead: true });
    console.log("✅ Submission marked as read:", submissionId);
  } catch (error) {
    console.error("❌ Error marking submission as read:", error);
    throw error;
  }
};
