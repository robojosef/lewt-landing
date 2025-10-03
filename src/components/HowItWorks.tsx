import { Lock, Eye, Undo2 } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Lock,
      title: "Stage Your Transfer",
      description: "Send tokens to a revocable locked account instead of directly to the recipient.",
      color: "bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
    },
    {
      icon: Eye,
      title: "Review & Share",
      description: "Check all details and share the transfer with your recipient for collection.",
      color: "bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400"
    },
    {
      icon: Undo2,
      title: "Undo if Needed",
      description: "Changed your mind? Simply take back your tokens before the recipient collects them.",
      color: "bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How Lewt Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Our three-step process gives you complete control over your crypto transfers, 
            eliminating the fear of irreversible mistakes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-left p-8 bg-card rounded-xl shadow-soft border border-border">
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};