import { Users, Zap, Heart } from "lucide-react";

export const Mission = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Our Mission
          </h2>
          
          <div className="text-xl text-muted-foreground mb-12 leading-relaxed">
            <p className="mb-6">
              We believe in the power of decentralization, but we also believe that 
              <strong className="text-foreground"> technology should serve humans</strong>.
            </p>
            <p>
              Our mission is to eliminate the fear of irreversible mistakes, making 
              self-custody safe and accessible for everyone, not just for experts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 text-left">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Powerful</h3>
              <p className="text-muted-foreground">
                Maintain all the benefits of decentralized finance while adding safety
              </p>
            </div>
            
            <div className="p-6 text-left">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Accessible</h3>
              <p className="text-muted-foreground">
                Make crypto safe for everyone, from beginners to experts
              </p>
            </div>
            
            <div className="p-6 text-left">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Human-First</h3>
              <p className="text-muted-foreground">
                Technology that adapts to human nature, not the other way around
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};