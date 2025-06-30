export default function Footer() {
    return(
        <footer className="bg-gray-800 text-white text-center py-6  rounded">
            <h3 className="text-3xl font-semibold mb-4">Connect with Me</h3>
            <div className="flex flex-wrap justify-center space-x-5 text-2xl">
               
                <a href="https://www.linkedin.com/in/selvamdasari55/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin "></i></a>
                <a href="https://github.com/Selvam-DG" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://www.kaggle.com/dgselvam" target="_blank"><i className="fab fa-kaggle"></i></a>
                <a href="https://www.xing.com/profile/Selvam_DasariGnanaprakash/web_profiles" target="_blank"><i className="fab fa-xing"></i></a>
                <a href="https://medium.com/@dasariselvam321" target="_blank"><i className="fab fa-medium"></i></a>
                <a href="https://x.com/selvamdg" target="_blank"><i className="fab fa-twitter"></i></a>
                <a href="mailto:dasariselvam321@gmail.com"><i className="fas fa-envelope"></i></a>
                <a href="/contact"><i className="fas fa-address-book"></i></a>
            </div>
            <div className="flex flex-wrap justify-center mt-4 space-x-4 text-md">
                <p>© 2025</p>
                <p>All rights reserved</p>
                <p>Selvam Dasari</p>
                <a href="https://github.com/Selvam-DG" className="underline">License</a>

            </div>

        </footer>
    );
    
};
