import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center pt-20 px-6">
        <h1 className="text-6xl font-bold tracking-tighter mb-6">Unlock Peer Secrets</h1>
        <p className="text-2xl text-zinc-400 mb-10">Discover what sets high-achieving professionals apart and boost your career</p>
        
        <form id="cta-form" className="max-w-md mx-auto space-y-4" action="https://xfkziloyyotnnxkypgmb.supabase.co/functions/v1/capture-signal" method="POST">
          <input type="hidden" name="experiment_id" value="a489a81a" />
          <input type="email" name="email" placeholder="your@email.com" required 
                 className="w-full px-8 py-5 bg-zinc-900 border border-zinc-700 rounded-3xl text-xl focus:outline-none focus:border-white" />
          <button type="submit" 
                  className="w-full bg-white hover:bg-zinc-100 text-black py-5 px-8 rounded-3xl font-semibold text-2xl transition">
            Get Instant Access
          </button>
        </form>
        <p className="text-xs text-zinc-500 mt-6">$29 one-time / $9/mo</p>
      </div>

      {/* PROBLEM SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Are You Falling Behind?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-zinc-900 p-8 rounded-3xl">Struggling to keep up with industry trends and best practices</div>
          
          <div className="bg-zinc-900 p-8 rounded-3xl">Feeling like you're not living up to your full potential</div>
          
          <div className="bg-zinc-900 p-8 rounded-3xl">Lacking the insights and strategies to stay ahead of the competition</div>
          
        </div>
      </div>

      {/* SOLUTION + BENEFITS (simplified for speed) */}
      <div className="bg-zinc-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Introducing PeerCompare</h2>
          <p className="text-xl text-zinc-400 text-center max-w-2xl mx-auto mb-12">Our AI-driven comparison tool gives you actionable insights to boost your career</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-zinc-950 p-8 rounded-3xl">Uncover the secrets of high-achieving professionals</div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl">Get personalized recommendations for improvement</div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl">Stay ahead of the curve with industry-leading strategies</div>
            
          </div>
        </div>
      </div>

      <div className="text-center py-12 text-zinc-500 text-sm">
        Powered by PMF Autopilot • Experiment #a489a81a
      </div>
    </main>
  );
}