
const blogPosts = [
    {
        id: '1',
        title: 'honestly, starting fresh feels scary but exciting',
        content: `There's something magical about new beginnings, isn't there? Today I decided to finally start this blog I've been thinking about for months. 

I've always been someone who overthinks everything - what if my writing isn't good enough? What if nobody reads it? What if I run out of things to say? But then I realized, this space isn't about perfection. It's about honesty, growth, and sharing the messy, beautiful journey of figuring life out.

So here's to being honestly me, sharing honestly about life, and hopefully connecting with others who are also just trying to figure it all out. Welcome to my little corner of the internet!`,
        excerpt: 'New beginnings are scary but exciting. Here\'s why I finally decided to start sharing my thoughts...',
        date: '2024-01-15',
        categories: ['personal', 'thoughts'],
        readTime: 3
    },
    {
        id: '2',
        title: 'the coffee shop revelation',
        content: `I was sitting in my favorite coffee shop today (you know, the one with the mismatched chairs and the barista who always remembers my order), when I overheard a conversation that completely shifted my perspective.

Two strangers were talking about their biggest regrets, and instead of focusing on things they did wrong, they were talking about opportunities they didn't take. Dreams they put on hold. Conversations they never had.

It made me realize how often we focus on our mistakes instead of our missed chances. There's a difference between regretting what you did and regretting what you didn't do. The latter feels heavier somehow.

I left that coffee shop with a new mantra: say yes more often, even when it's scary. Especially when it's scary.`,
        excerpt: 'Sometimes the best life lessons come from overheard conversations in coffee shops...',
        date: '2024-01-22',
        categories: ['life lessons', 'thoughts'],
        readTime: 4
    },
    {
        id: '3',
        title: 'why I stopped apologizing for taking up space',
        content: `"Sorry for bothering you..." "Sorry, this might be a dumb question..." "Sorry for taking up your time..."

When did I start apologizing for existing? When did I convince myself that my thoughts, questions, and presence were inherently bothersome?

Last week, I caught myself apologizing to a tree I bumped into. A TREE. That's when I knew things had gone too far.

I've been on a journey to stop over-apologizing, and it's harder than you might think. It means catching myself mid-sentence, reframing my thoughts, and remembering that I have just as much right to take up space as anyone else.

Instead of "Sorry for the long email," I now write "Thank you for taking the time to read this." Instead of "Sorry for asking," I say "I'd appreciate your help with this."

It's a small shift, but it's changing how I see myself in the world.`,
        excerpt: 'The journey from constant apologies to confidently taking up space...',
        date: '2024-02-03',
        categories: ['personal growth', 'confidence'],
        readTime: 5
    },
    {
        id: '4',
        title: 'midnight thoughts and morning clarity',
        content: `Do you ever notice how different your thoughts are at midnight versus 7 AM? 

At midnight, everything feels profound and urgent. Every problem seems insurmountable, every decision feels life-changing, and every emotion is amplified by ten. I've written some of my most dramatic journal entries at 2 AM.

But morning comes, and suddenly those same thoughts feel... manageable. The problems have solutions, the decisions feel clearer, and the emotions have settled into something more workable.

I've started keeping a "midnight thoughts" note on my phone for all those late-night revelations. In the morning, I revisit them with fresh eyes. Some are genuinely insightful. Others make me laugh at how dramatic I can be when I'm tired.

There's wisdom in both states - the raw honesty of midnight vulnerability and the grounded clarity of morning light. The trick is knowing which thoughts to trust and when.`,
        excerpt: 'The difference between midnight thoughts and morning clarity, and why both matter...',
        date: '2024-02-10',
        categories: ['thoughts', 'self-reflection'],
        readTime: 3
    }
];

const categories = [
    { name: 'personal', color: 'bg-coral-100 text-coral-800', count: 1 },
    { name: 'thoughts', color: 'bg-blue-100 text-blue-800', count: 3 },
    { name: 'life lessons', color: 'bg-green-100 text-green-800', count: 1 },
    { name: 'personal growth', color: 'bg-purple-100 text-purple-800', count: 1 },
    { name: 'confidence', color: 'bg-pink-100 text-pink-800', count: 1 },
    { name: 'self-reflection', color: 'bg-yellow-100 text-yellow-800', count: 1 }
];
