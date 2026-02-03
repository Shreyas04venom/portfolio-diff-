import React, { useEffect, useState } from 'react';
import { getAllContactSubmissions, deleteContactSubmission } from '../utils/contactUtils';
import { styles } from '../styles';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const data = await getAllContactSubmissions();
      setSubmissions(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
      setError(null);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError('Failed to load submissions');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      try {
        await deleteContactSubmission(id);
        setSubmissions(submissions.filter(sub => sub.id !== id));
      } catch (err) {
        console.error('Error deleting submission:', err);
        alert('Failed to delete submission');
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-primary text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className={`${styles.sectionHeadText}`}>Contact Submissions</h1>
        <p className={`${styles.sectionSubText} mb-8`}>View all contact form submissions from your visitors</p>

        {loading && <p className="text-center text-lg">Loading submissions...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && submissions.length === 0 && (
          <p className="text-center text-gray-400">No submissions yet</p>
        )}

        {!loading && submissions.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-tertiary p-6 rounded-lg border border-secondary hover:border-primary transition-colors"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{submission.name}</h3>
                  <p className="text-secondary mb-1">
                    <strong>Email:</strong> <a href={`mailto:${submission.email}`} className="text-blue-400 hover:text-blue-300">{submission.email}</a>
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Submitted:</strong> {submission.createdAt}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-secondary whitespace-pre-wrap break-words">{submission.message}</p>
                </div>

                <div className="flex gap-2">
                  <a
                    href={`mailto:${submission.email}?subject=Re: Your Contact Form Submission`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors text-center"
                  >
                    Reply
                  </a>
                  <button
                    onClick={() => handleDelete(submission.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={fetchSubmissions}
            className="bg-primary-accent hover:bg-primary-accent-dark text-white px-6 py-3 rounded-lg transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
