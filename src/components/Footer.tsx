import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          {/* Social Links */}
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