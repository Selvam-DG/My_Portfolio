export default function Footer() {
    return(
        <footer className="bg-gray-800 text-white py-8 px-4 text-center rounded-t-lg ">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-200">Connect with Me</h3>
            <div className="flex flex-wrap justify-center gap-6 text-2xl mb-6">
               
                <a href="https://www.linkedin.com/in/selvamdasari55/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><i className="fab fa-linkedin "></i></a>
                <a href="https://github.com/Selvam-DG" target="_blank" rel="noopener noreferrer"className="hover:text-indigo-200"><i className="fab fa-github"></i></a>
                <a href="https://www.kaggle.com/dgselvam" target="_blank" className="hover:text-blue-400"><i className="fab fa-kaggle"></i></a>
                <a href="https://www.xing.com/profile/Selvam_DasariGnanaprakash/web_profiles" target="_blank" className="hover:text-green-300"><i className="fab fa-xing"></i></a>
                <a href="https://medium.com/@dasariselvam321" target="_blank" className="hover:text-yellow-400"><i className="fab fa-medium"></i></a>
                <a href="https://x.com/selvamdg" target="_blank" className="hover:text-sky-400"><i className="fab fa-twitter"></i></a>
                <a href="mailto:dasariselvam321@gmail.com" className="hover:text-orange-400"><i className="fas fa-envelope"></i></a>
                <a href="/contact" className="hover:text-indigo-300"><i className="fas fa-address-book"></i></a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm sm:text-base text-gray-300">
                <span>© 2025</span>
                <span>All rights reserved</span>
                <span>Selvam Dasari</span>  
                <a href="https://github.com/Selvam-DG" ctarget="_blank" className="underline hover:text-white">License</a>

            </div>

        </footer>
    );
    
};
