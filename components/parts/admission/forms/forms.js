// components/PricingSection.js
import { useState } from 'react';
import Section from '../../section';

const FormSection = ({locale="ja"}) => {
  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    const url = process.env.NEXT_PUBLIC_EMAIL_WORKER_URL ?? "http://localhost:8787/"
    //const url = "http://localhost:8787/"

    // フォームデータをサーバーに送信する処理をここに追加
    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
        // 成功した場合の処理
        alert('送信完了!');
    } else {
        // エラー処理
        alert('送信失敗.');
    }
    };
    

  return (
    <Section>
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
        入学申し込み
        </div>
        <form className="py-4 px-6" onSubmit={handleSubmit}>
        {Object.entries({
            name: 'Name',
            email: 'Email',
            phone: 'Phone Number',
            date: 'Date',
            time: 'Time',
            service: 'Service',
            message: 'Message',
        }).map(([key, label]) => (
            <div className="mb-4" key={key}>
            <label className="block text-gray-700 font-bold mb-2" htmlFor={key}>
                {label}
            </label>
            {key !== 'message' ? (
                key === 'service' ? (
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut</option>
                    <option value="coloring">Coloring</option>
                    <option value="styling">Styling</option>
                    <option value="facial">Facial</option>
                </select>
                ) : (
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={key}
                    type={key === 'date' || key === 'time' ? key : 'text'}
                    name={key}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    value={formData[key]}
                    onChange={handleChange}
                />
                )
            ) : (
                <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={key}
                name={key}
                rows="4"
                placeholder="Enter any additional information"
                value={formData[key]}
                onChange={handleChange}
                />
            )}
            </div>
        ))}
        <div className="flex items-center justify-center mb-4">
            <button
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            type="submit"
            >送信
            </button>
        </div>
        </form>
    </div>
    </Section>
  );
};

export default FormSection;
