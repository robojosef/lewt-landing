export const TestTransfers = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            No more <span className="text-primary">test transfers!</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Tired of sending test transfers every time you're sending to a new address or a large amount of tokens? You're not alone! Lewt is here to help!
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            Tell me if this sounds familiar:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-left p-8 bg-card rounded-xl shadow-soft border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Before Lewt</h3>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <div className="text-blue-600 dark:text-blue-400">Alice:</div>
                  <div className="text-muted-foreground ml-4">can you please send me a test transfer to &lt;address&gt;?</div>
                </div>
                <div>
                  <div className="text-green-600 dark:text-green-400">Bob:</div>
                  <div className="text-muted-foreground ml-4">ok I sent you 1 USDC. Did that work?</div>
                </div>
                <div>
                  <div className="text-blue-600 dark:text-blue-400">Alice:</div>
                  <div className="text-muted-foreground ml-4">hold on...</div>
                </div>
                <div>
                  <div className="text-blue-600 dark:text-blue-400">Alice:</div>
                  <div className="text-muted-foreground ml-4">got it</div>
                </div>
                <div>
                  <div className="text-green-600 dark:text-green-400">Bob:</div>
                  <div className="text-muted-foreground ml-4">now sending 9,999 USDC. Is that ok?</div>
                </div>
                <div>
                  <div className="text-blue-600 dark:text-blue-400">Alice:</div>
                  <div className="text-muted-foreground ml-4">yes that sounds good</div>
                </div>
                <div>
                  <div className="text-green-600 dark:text-green-400">Bob:</div>
                  <div className="text-muted-foreground ml-4">sent, did you get it?</div>
                </div>
                <div>
                  <div className="text-blue-600 dark:text-blue-400">Alice:</div>
                  <div className="text-muted-foreground ml-4">hold on...</div>
                </div>
                <div>
                  <div className="text-blue-600 dark:text-blue-400">Alice:</div>
                  <div className="text-muted-foreground ml-4">I got the rest</div>
                </div>
              </div>
            </div>

            <div className="text-left p-8 bg-card rounded-xl shadow-soft border border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-6">With Lewt</h3>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <div className="text-blue-600 dark:text-blue-400">Alice:</div>
                  <div className="text-muted-foreground ml-4">hey I made a lewt request here &lt;link&gt;</div>
                </div>
                <div>
                  <div className="text-green-600 dark:text-green-400">Bob:</div>
                  <div className="text-muted-foreground ml-4">stashed the lewt</div>
                </div>
                <div>
                  <div className="text-blue-600 dark:text-blue-400">Alice:</div>
                  <div className="text-muted-foreground ml-4">got it!</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg text-foreground">
              With lewt you can send confidently large amounts in a single transfer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
