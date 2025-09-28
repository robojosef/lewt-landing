import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Lewt" className="h-8 w-8" />
              <span className="text-2xl font-bold">Lewt</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              The undo button for DeFi. Send crypto with confidence, knowing you can 
              always take it back if something goes wrong.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Twitter
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Discord
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                GitHub
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/50 text-sm">
            © 2025 Lewt Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};