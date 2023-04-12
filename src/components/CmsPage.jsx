import { useEffect, useState } from "react";
import { signOut, getAuth } from "firebase/auth";
import app from "../firebase";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://pw-backend.vercel.app";

export default function CmsPage() {
  const auth = getAuth(app);
  const [message, setMessage] = useState(false)
  const [resumeFile, setResumeFile] = useState(null)
  const [createNew, setCreateNew] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [newProjectData, setNewProjectData] = useState({});
  const userLogin = auth.currentUser;


  const handleSubmitPdf = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('pdf', resumeFile)
    
    try {
      console.log(formData);
      const {data} = await axios({
        url: BASE_URL + '/upload-pdf',
        method: 'POST',
        data: formData
      })

      setMessage(true)

    } catch (err) {
      console.log(err);
    }
  }

  const handleFileChange = (e) => {
    setMessage(false)
    setResumeFile(e.target.files[0])
  }

  const fetchProjectData = async () => {
    try {
      const { data } = await axios({
        url: BASE_URL,
        method: "GET",
      });

      setProjectData(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteOneProject = async (id) => {
    try {
      const { data } = await axios({
        url: BASE_URL + `/${id}`,
        method: "DELETE",
      });
      fetchProjectData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    let data = { ...newProjectData, [e.target.id]: e.target.value };
    setNewProjectData(data);
  };

  const handleOnSubmit = async (newProject) => {
    try {
      const { data } = await axios({
        url: BASE_URL,
        method: "POST",
        data: newProject,
      });

      fetchProjectData();
      setNewProjectData({});
    } catch (err) {
      console.log(err);
    }
  };

  return !userLogin ? (
    <Navigate to="/mylogin" />
  ) : (
    <section className="p-8 pt-12 flex gap-4 h-full justify-center relative">
      <button
        onClick={(e) => {
          e.preventDefault;
          handleLogout();
        }}
        className="m-2 bg-red-600 px-2 hover:bg-red-500 absolute top-1 right-6"
      >
        logout
      </button>
      <div className="border-2 p-4  overflow-y-auto w-[24rem] h-fit">
        <div className="flex justify-between">
          <p className="font-bold text-xl">Project List</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCreateNew(!createNew);
            }}
            className="hover:-translate-y-1"
          >
            ➕
          </button>
        </div>
        {projectData.map((item, i) => {
          return (
            <div className="mt-2" key={i}>
              <div className="flex gap-4 justify-between">
                <p>
                  {" "}
                  {i + 1}. {item.title}
                </p>
                <div className="flex gap-2 justify-center items-center text-sm">
                  {/* <button>edit</button> */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      deleteOneProject(item.id);
                    }}
                    className="hover:text-red-500"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-2 p-4 h-fit">
        <p className="font-bold text-xl">Personal Data</p>
        <form onSubmit={handleSubmitPdf} className="mt-2">
          <p>Resume Data</p>
          <input type="file" accept=".pdf"  onChange={handleFileChange} />
          <button type="submit" className="px-2 mt-4 bg-secondary text-black hover:bg-yellow-200">upload</button>
        </form>
        <p className={message ? "mt-4 text-red-400 animate-bounce" : "hidden"}>Resume Uploaded !</p>
      </div>
      <div className={createNew ? "border-2 p-4 w-[300px]" : "hidden"}>
        <p className="text-xl font-bold">New Project Form</p>
        <form action="" className="mt-2">
          <div className="flex flex-col gap-1">
            <p>Title</p>
            <input
              onChange={handleOnChange}
              id="title"
              value={newProjectData.title || ""}
              type="text"
              className="rounded-lg text-black px-2"
            />
            <p>Link</p>
            <input
              onChange={handleOnChange}
              id="stringUrl"
              value={newProjectData.stringUrl || ""}
              type="text"
              className="rounded-lg text-black px-2"
            />
            <p>Year</p>
            <input
              onChange={handleOnChange}
              id="year"
              type="number"
              className="rounded-lg text-black px-2"
            />
            <p>Category</p>
            <input
              onChange={handleOnChange}
              id="category"
              type="text"
              className="rounded-lg text-black px-2"
            />
            <p>Description</p>
            <textarea
              onChange={handleOnChange}
              id="description"
              className="rounded-lg text-black p-2"
            ></textarea>
            <p>Image Url</p>
            <input
              onChange={handleOnChange}
              id="imgUrl"
              type="text"
              className="rounded-lg text-black px-2"
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                handleOnSubmit(newProjectData);
              }}
              type="submit"
              className="bg-secondary px-2 text-black py-1 mt-6 rounded-lg font-bold hover:bg-yellow-200"
            >
              Sumbit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
