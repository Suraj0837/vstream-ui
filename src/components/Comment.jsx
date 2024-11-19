import React, { useState } from "react";
import { Trash2, Edit2, X } from "lucide-react";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const addComment = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      author: "You",
      timestamp: new Date(),
      likes: 0,
      isLiked: false,
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const saveEdit = () => {
    setComments(
      comments.map((comment) =>
        comment.id === editingId ? { ...comment, text: editText } : comment
      )
    );
    setEditingId(null);
  };

  const toggleLike = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
              isLiked: !comment.isLiked,
            }
          : comment
      )
    );
  };

  return (
    <div className="mt-8 w-full mx-auto px-4">
      {showAlert && (
        <div className="mb-4 p-4 bg-green-50 text-green-800 rounded-lg">
          Comment deleted successfully
        </div>
      )}

      <div className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[100px] resize-none"
        />
        <button
          onClick={addComment}
          disabled={!newComment.trim()}
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Post Comment
        </button>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                  {comment.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {comment.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleLike(comment.id)}
                  className={`px-3 py-1 rounded-full text-sm flex items-center space-x-1 ${
                    comment.isLiked
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span>{comment.likes}</span>
                  <span>likes</span>
                </button>
                <button
                  onClick={() => {
                    setEditingId(comment.id);
                    setEditText(comment.text);
                  }}
                  className="p-1 text-gray-500 hover:bg-gray-100 rounded"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => deleteComment(comment.id)}
                  className="p-1 text-red-500 hover:bg-red-50 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {editingId === comment.id ? (
              <div className="mt-3">
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[100px] resize-none"
                />
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={saveEdit}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="mt-2 text-gray-700">{comment.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
