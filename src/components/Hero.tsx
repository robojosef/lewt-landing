import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { VideoDemo } from "./VideoDemo";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Logo and Project Name */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <img src={logo} alt="Lewt" className="h-16 w-16 md:h-20 md:w-20 flex-shrink-0" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Lewt
          </h1>
        </div>
        
        {/* Main headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-center animate-slide-up">
          The <span className="bg-gradient-primary bg-clip-text text-transparent">Undo Button</span>
          <br />
          for DeFi
        </h2>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-center animate-slide-up [animation-delay:0.2s]">
          Send crypto with confidence. Lewt is a simple, secure layer on Solana that lets you cancel mistaken transfers before they become permanent.
        </p>

        {/* Demo Video */}
        <div className="mb-12 animate-slide-up [animation-delay:0.4s]">
          <VideoDemo 
            src="/demo.webm"
            poster="/demo-poster.jpg"
            className="max-w-4xl mx-auto"
            controls={true}
            muted={false}
          />
        </div>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up [animation-delay:0.6s]">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Demo Coming Soon
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground animate-slide-up [animation-delay:0.8s]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Decentralized</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Non-custodial</span>
          </div>
        </div>
      </div>
    </section>
  );
};