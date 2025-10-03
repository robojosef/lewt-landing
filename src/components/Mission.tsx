import { Users, Zap, Heart } from "lucide-react";

export const Mission = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground">
            We believe in the power of decentralization, but we also believe that 
            <strong className="text-foreground"> technology should serve humans</strong>.
            Our mission is to eliminate the fear of irreversible mistakes, making 
            self-custody safe and accessible for everyone, not just for experts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-left p-8 bg-card rounded-xl shadow-soft border border-border">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-950 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Powerful</h3>
            <p className="text-muted-foreground">
              Maintain all the benefits of decentralized finance while adding safety
            </p>
          </div>
          
          <div className="text-left p-8 bg-card rounded-xl shadow-soft border border-border">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Accessible</h3>
            <p className="text-muted-foreground">
              Make crypto safe for everyone, from beginners to experts
            </p>
          </div>
          
          <div className="text-left p-8 bg-card rounded-xl shadow-soft border border-border">
            <div className="w-16 h-16 bg-pink-100 dark:bg-pink-950 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Human-First</h3>
            <p className="text-muted-foreground">
              Technology that adapts to human nature, not the other way around
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};