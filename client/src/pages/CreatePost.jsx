import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePOst = () => {
  const navigate = useNavigate();
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const generateImageHandler = () => {};
  const SubmitHandler = () => {};
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const SurpriseMeHandler = () => {
    const randonPropt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randonPropt });
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Create imaginative and visually stunning images through by Dall-E AI
          and share them with the community
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={SubmitHandler}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="Daniel Bedrack"
            value={form.name}
            handleChange={changeHandler}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="a sea otter with a pearl earring by Johannes Vermeer"
            value={form.prompt}
            handleChange={changeHandler}
            isSurpriseMe
            handleSurpriseMe={SurpriseMeHandler}
          />
        </div>
        <div
          className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center"
        >
          {form.photo ? (
            <img
              className="w-full h-full object-contain"
              src={form.photo}
              alt={form.prompt}
            />
          ) : (
            <img
              className="w-9/12 h-9/12 object-contain opacity-40"
              src={preview}
              alt="preview"
            />
          )}

          {generatingImg && (
            <div
              className="absolute inset-0 z-0 flex
            justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg"
            >
              <Loader />
            </div>
          )}
        </div>
        <div className="mt-5 flex gap-5">
          <button
            className="text-white bg-green-700 font-medium 
          rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            type="button"
            onClick={generateImageHandler}
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            Once you have created the image you want, you can share it with
            others in the community
          </p>
          <button
            className="mt-3 text-white bg-[#6469ff]
           font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            type="submit"
          >
            {loading ? 'Sharing...' : 'Share with the commuinty'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePOst;
