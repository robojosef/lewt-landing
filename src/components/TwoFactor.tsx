import { AlertTriangle, Shield, Car } from "lucide-react";

export const TwoFactor = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Don't Just Send. Hand off securely with <span className="text-primary">Two-Factor Transfers.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
          A standard crypto transfer has only one point of failure: the recipient address. Once you hit 'Confirm', your assets are gone, whether you meant to send them or not.
          Lewt fixes this by introducing Two-Factor Transfers (2FT), a fundamentally new and safer way to move value. We separate the transaction into two distinct, user-controlled layers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="text-left p-8 bg-card rounded-xl shadow-soft border border-border">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-950 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Factor 1: the recipient address</h3>
            <p className="text-muted-foreground">
              This makes the recipient wallet the key to the treasure chest. Only the recipient wallet may collect the tokens.
            </p>
          </div>
          
          <div className="text-left p-8 bg-card rounded-xl shadow-soft border border-border">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center mb-6">
              <Car className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Factor 2: the secret location</h3>
            <p className="text-muted-foreground">
              This is a unique URL generated when you make your deposit. The recipient may not collect the tokens until you share the location with them. You can think of it as the map to the treasure. You may have the key, but you also need to know where the treasure chest is buried!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};