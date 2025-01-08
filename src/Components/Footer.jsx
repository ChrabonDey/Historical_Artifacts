import img1 from "../assets/Untitled_design__1_-removebg-preview.png";
const Footer = () => {
  return (
    <div className="h-full w-full">
      <footer className="bg-[#252930] text-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center ">
              <div className="flex justify-center gap-5 items-center">
                <img src={img1} alt="" className="w-20 h-20" />
                <span className="text-xl flex flex-col font-bold ml-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
                  <div>Historical</div>
                  <div>Tracker</div>
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li>
                  <strong>Email:</strong> support@artifactexplorer.com
                </li>
                <li>
                  <strong>Phone:</strong> +9876543210
                </li>
                <li>
                  <strong>Address:</strong> 123 History Lane, Heritage City,
                  Country
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h4 className="text-xl text-center font-bold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-6 justify-center">
                <a
                  href="https://facebook.com/artifactexplorer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://twitter.com/artifactexplorer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
                    alt="Twitter"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://linkedin.com/company/artifactexplorer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="md:col-span-3 mt-8 md:mt-4 text-center">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Artifact Explorer. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
