const Footer = () => {
    return (
        <div className="h-full w-full">
            <footer className="bg-gray-800 text-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* About Us Section */}
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">About Us</h4>
                            <p className="text-gray-400">
                                Artifact Explorer is your gateway to discovering historical treasures from around the world. Dive into the past and explore unique artifacts with their rich stories and cultural significance.
                            </p>
                        </div>

                        {/* Contact Us Section */}
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
                            <ul className="space-y-2">
                                <li><strong>Email:</strong> support@artifactexplorer.com</li>
                                <li><strong>Phone:</strong> +9876543210</li>
                                <li><strong>Address:</strong> 123 History Lane, Heritage City, Country</li>
                            </ul>
                        </div>

                        {/* Follow Us Section */}
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
                            <div className="flex space-x-6">
                                <a href="https://facebook.com/artifactexplorer" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png" alt="Facebook" className="w-6 h-6" />
                                </a>
                                <a href="https://twitter.com/artifactexplorer" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" className="w-6 h-6" />
                                </a>
                                <a href="https://instagram.com/artifactexplorer" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" className="w-6 h-6" />
                                </a>
                                <a href="https://linkedin.com/company/artifactexplorer" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Newsletter Subscription Section */}
                        <div className="md:col-span-3 mt-8">
                            <h4 className="text-xl font-bold text-white mb-4 text-center">Stay Updated</h4>
                            <form className="flex flex-col items-center">
                                <fieldset className="form-control w-full max-w-md">
                                    <label className="label">
                                        <span className="label-text text-gray-300">Enter your email to receive the latest updates</span>
                                    </label>
                                    <div className="join w-full">
                                        <input
                                            type="email"
                                            placeholder="your-email@artifactexplorer.com"
                                            className="input input-bordered join-item w-3/4" />
                                        <button className="btn btn-primary join-item w-1/4">Subscribe</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>

                        {/* Footer Bottom Section */}
                        <div className="md:col-span-3 mt-8 md:mt-4 text-center">
                            <p className="text-sm text-gray-400">
                                &copy; {new Date().getFullYear()} Artifact Explorer. All rights reserved.
                            </p>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
