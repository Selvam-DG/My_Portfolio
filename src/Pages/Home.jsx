export default function Home() {
    return (
        <div className="min-h-screen mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-right text-white bg-[url('./public/images/background1.jpg')] bg-cover  ">
            <div className="md:w-2/2 space-y-4 ">
            <h2 className="text-4xl font-bold">SELVAM DASARI GNANAPRAKASH</h2>
            <p className="text-xl">Software Engineer || Data Scientist</p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-start md:px-6 mt-4">
                <img src="./public/images/my_photo.jpg" alt="Selvam Dasari Image" className="rounded-full w-45 h-45 md:w-64 md:h-64 object-cover" />
            </div>

        </div>
    );

    
};
