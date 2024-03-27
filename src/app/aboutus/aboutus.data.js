export const AboutUsData = {
	errorCode: 200,
	success: true,
	message: "",
	result: {
		title: "About Author",
		imageUrl: "/images/author_img.png",
		description: "Kshamta is an author, poetess, dentist, teacher, mum, cook and a Tolkien fan. Karma Sagas - The Sangam is her first book and she intends to write at least a few more. Her interest in consciousness, sustainability and climate change has led her to explore science, spirituality and philosophy. It was all getting a bit too serious so she thought why not bring it all together into an entertaining story? \nWhen she is not busy figuring out treatment plans or lost in a fantasy land, she loves talking to her son about all things science. Born not too far from the Thar desert in North India, she now calls North Yorkshire her home. She blames the serene and picturesque surroundings to make her want to write – a desire that had been peacefully sleeping since she was fourteen. But before that, she would make up stories and songs and even recite her poetry unabashedly at every opportunity.",
		usefulLinks: [
			{
				title: "Contact Information",
				link: "/contactus"
			},
			{
				title: "Frequently Asked Questions",
				link: "/contactus#faqsection"
			},
			{
				title: "Glossary of terms",
				// link: "/bookdetails#glossaryofterms"
				link: `/bookdetails?bookName=${encodeURIComponent('Karma Sagas The Sangam: 1')}#grossaryoftermssection`
			}
		],
		otherInfo: {
			description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
			cta: {
				text: "Learn More",
				link: "/shop"
			}
		},
		testimonials: {
			title: "testmonial",
			reviews: [
				{
					name: "Anonymous",
					lastUpdated: "Last updated on 25 Jan 2024",
					description: `Kshamta manages to bring both a dystopian future novel and mix it with spirituality and it really has you questioning throughout the novel. I absolutely loved how this book was set around a set of siblings navigating their quest in a dystopian future.
					This has to be one of my favourite reads of the year and I can't wait to see what happens next !!"`,
					rating: "5"
				},
				{
					name: "Anonymous",
					lastUpdated: "Last updated on 15 Feb 2024",
					description: "Purohit's writing is immersive and vivid, painting a rich and detailed world that feels both futuristic and rooted in tradition. The dynamic between the two siblings and their different perspectives on science and spirituality adds depth to the story, as they navigate through unforeseen challenges and unexpected malevolence threatening the world.",
					rating: "5"
				},
				{
					name: "Kathryn M.",
					lastUpdated: "Last updated on 01 Jan 2024",
					description: "This was a great concept for a dystopian future novel it worked well overall with what was going on. It worked as a opening chapter in this series. Kshamta Purohit creates a great concept and I enjoyed how good the characters worked with this universe. I can't wait to read more in this series.",
					rating: "5"
				},
				{
					name: "Anonymous",
					lastUpdated: "Last updated on 15 March 2024",
					description: `Wow! What a fantastic read and amazing debut. This YA dystopian story follows siblings Krupa and Joash in a thrilling journey across the Himalayas. The Sangam explores environmental issues, spirituality and ancient wisdom in this timely blending of traditional sageness and futuristic elements. Kshamta Purohit paints a totally believable, vivid and immersive world, and her writing is nothing short of amazing.`,
					rating: "5"
				}
			]
		}
	}
}