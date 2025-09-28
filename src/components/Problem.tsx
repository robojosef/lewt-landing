import { AlertTriangle, Shield, Car } from "lucide-react";

export const Problem = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your crypto needs a <span className="text-primary">safety net</span>, too.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gmail gives you 30 seconds to 'Undo Send'.
            Why should your money have less protection than your email?
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 bg-card rounded-xl shadow-soft border border-border">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-950 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">The Problem</h3>
            <p className="text-muted-foreground">
              Crypto transactions are irreversible. A single mistake can cost you everything, 
              with no way to get your funds back.
            </p>
          </div>
          
          <div className="text-center p-8 bg-card rounded-xl shadow-soft border border-border">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-6">
              <Car className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Other Industries</h3>
            <p className="text-muted-foreground">
              Cars have airbags. Computers have "Are you sure?" dialogs. 
              Every technology has safety measures to protect users.
            </p>
          </div>
          
          <div className="text-center p-8 bg-card rounded-xl shadow-soft border border-border">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">The Solution</h3>
            <p className="text-muted-foreground">
              Lewt brings safety to crypto without sacrificing the power of decentralization. 
              Make mistakes recoverable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};