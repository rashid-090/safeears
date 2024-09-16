import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWhatsapp } from "react-icons/fa";

export default function SendMessage() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const sendMessageTemplate = async () => {
    setLoading(true);

    const data = new URLSearchParams({
      apiToken: '7341|kBXzh0A8CdwlNVc5muoAU4VgM5DYg8YVdpcPgl4m',
      phone_number_id: '406751799183826',
      template_name: 'safeears_website',
      phone_number: '+919207166699',
      language_code: 'en',
      components: JSON.stringify([{
        type: 'body',
        parameters: [{
          type: 'text',
          text: message,
        }],
      }]),
    });

    try {
      const res = await fetch('https://bot.wabis.in/api/v1/whatsapp/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      setResponse(result);
      setMessage('');
      toast.success('Message sent successfully!');
      // setShowModal(false);
    } catch (error) {
      toast.error(error.message || 'Message failed to send');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      {!showModal ? (
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-5 left-5 bg-green-500 hover:bg-green-600 text-white text-3xl p-2"
        >
          <FaWhatsapp/>
        </button>
      ) : (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Send WhatsApp Message</h2>

            <textarea
              className="w-full text-black p-2 border rounded-md mb-4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
            ></textarea>

            <button
              onClick={sendMessageTemplate}
              className={`bg-blue-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50' : ''}`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {response && (
              <div className="mt-4">
                <pre className="p-4 bg-gray-100 text-black rounded">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
