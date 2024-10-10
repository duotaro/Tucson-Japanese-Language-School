import Head from "next/head";
import Layout from '../../../components/layout'
import React, { useContext, useState } from 'react';
import LocaleContext from "../../../components/context/localeContext";
import { useLocale } from "../../../utils/locale";
import { getDatabase } from "../../../lib/notion";


export default function AdmissionFormsPage({ about }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

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

    const url = process.env.EMAIL_WORKER_URL ?? "http://localhost:8787/"
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


  let breadcrumb = {
    parents: [{link: '/admissions/', title: "admissions"}],
    current: lang.forms
  }


  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.forms} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.forms} - ${lang.description}`} />
      </Head>

      <div className="">
        <div className="row">
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
              >
                送信（翻訳）
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {

  // get about
  let about = await getAbout()
  return {
    props: {
      about: about
    },
    revalidate: 1
  };
};

const getAbout = async () => {
  const database = await getDatabase("d4eb3828e74c469b9179ca7be9edb5cf")


  return database
}
