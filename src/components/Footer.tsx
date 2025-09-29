import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-start">
          {/* Social Links */}
          <div className="flex gap-4">
            <span className="text-background/70">Follow us on</span>
            <a href="https://x.com/GetLewt" className="text-background/70 hover:text-background transition-colors flex items-center gap-1">

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-start items-start">
          <p className="text-background/50 text-sm">
            © 2025 Lewt Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};