import { EventCard } from "@/components/event-card";
import { GroupCard } from "@/components/group-card";

export default function Home() {
  return (
    <div className="max-w-7xl px-4 mx-auto py-6 md:py-12">
      {/* Groups  */}
      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Groups in Hyderabad
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {groups.map((group) => (
            <GroupCard
              key={group.slug}
              name={group.name}
              membersCount={Number(group.members)}
              slug={group.slug}
              location={"Hyderabad"}
              posterUrl={group.posterUrl ?? ""}
            />
          ))}
        </div>
      </section>

      {/* Events  */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Trips from Hyderabad</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...new Array(10)].map((_, i) => (
            <EventCard
              key={i}
              posterUrl="https://secure.meetupstatic.com/photos/event/c/f/0/5/600_523852997.webp?w=750"
              eventName="Bhongir Fort: 300 feet Rappelling & Trekking"
              price={99.99}
              date={new Date("2023-07-15")}
              time="7:00 PM"
              numberOfDays={3}
              location="Central Park, New York"
              groupName="escape and explore"
              dayName="Sunday"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

const groups = [
  {
    name: "BCF - Backpackers & City Freaks - Hyderabad",
    description:
      "Backpackers & City Freaks (fondly called as BCF) is a perfect group for people who are interested in treks, hikes, expeditions, backpacking adventure trips, leisure trips, water sport trips, camping, rock climbing, bouldering, horse riding, swimming, kayaking etc.Our tours are designed around – '3 interests'\n1. Adventure activities\n2. Weekend trips\n3. City life eventsWith 1500+ of trips facilitated for more than 50,000 BCFians, we take care of all the stressful parts like transportation, and accommodation leaving you time to relax and enjoy a unique travel experience you wouldn’t be able to book on your own.\nAll ages are welcome. People who are new to travelling are also very welcome.More about our Trips:\nOur Monsoon trekking trips include places like Rajmachi, Kalsubai, Matheran, Harishchandragad, Bhimashankar, Rajgad fort, Katraj to Sinhagad (K2S) etc.Our leisure trips include places like Gokarna beaches, Murudeshwar, Vibhoothi waterfalls, Dandeli, Coorg, Chikmagalur, Pondycherry etc.Our City Freak events include Khaja Guda, Khila Ghanpur, Mallela Theertham waterfalls, Charikonda, Koil Sagar, Koil Konda, night camping events, Horse Riding, etcWhy travel with BCF?For any group bookings or any corporate events,\"All skill levels are welcome. I started this group to meet other outdoor enthusiasts. Looking forward to exploring the outdoors with everybody.\"\n~Raj Kiran, FounderMore about our Founder Raj Kiran:\nTedX talk at SREC: [https://www.youtube.com/watch?v=VWyseaVPg_A](https://www.youtube.com/watch?v=VWyseaVPg_A)\nRed FM Interview - Unsung Hero: Red FM interview – Independence day 2020",
    members: "37135",
    slug: "hyderabad-backpackers-n-city-freaks",
    posterUrl:
      "https://secure.meetupstatic.com/photos/event/9/c/3/c/clean_524619996.webp",
  },
  {
    name: "BCF Only Hikes and Treks",
    description:
      "Backpackers & City Freaks (fondly called as BCF) is a perfect group for people who are interested in treks, hikes, expeditions, backpacking adventure trips, leisure trips, water sport trips, camping, rock climbing, bouldering, horse riding, swimming, kayaking etc.Our tours are designed around – '3 interests'\n1. Adventure activities\n2. Weekend trips\n3. City life eventsWith 1000s of trips facilitated for more than 50,000 BCFians, we take care of all the stressful parts like transportation, and accommodation leaving you time to relax and enjoy a unique travel experience you wouldn’t be able to book on your own.\nAll ages are welcome. People who are new to travelling are also very welcome.More about our Trips:\nOur Monsoon trekking trips include places like Rajmachi, Kalsubai, Matheran, Harishchandragad, Bhimashankar, Rajgad fort, Katraj to Sinhagad (K2S) etc.Our leisure trips include places like Gokarna beaches, Murudeshwar, Vibhoothi waterfalls, Dandeli, Coorg, Chikmagalur, Pondycherry etc.Our City Freak events include KhajaGuda, Khila Ghanpur, Mallela Theertham waterfalls, Charikonda, Koil Sagar, Koil Konda, night camping events, Horse Riding, etcWhy travel with BCF?For any group bookings or any corporate events,\"All skill levels are welcome. I started this group to meet other outdoor enthusiasts. Looking forward to exploring the outdoors with everybody.\"\n~Raj Kiran, Founder\n--------------------------------------------------------------------------------------------------------\nIn case you want to purchase Backpacking Equipment ([https://amzn.to/2XOGYkn](https://amzn.to/2XOGYkn)) and Other necessary items ([https://amzn.to/3szke6j](https://amzn.to/3szke6j)) for your trips. We suggest purchasing Quechua Products ([https://amzn.to/2Lz8Arv](https://amzn.to/2Lz8Arv))",
    members: "3096",
    slug: "bcf-only-hikes-and-treks",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/524410584/178x100.jpg?w=178?w=384",
  },
  {
    name: "Hyderabad Adventurers & Trekkers Club",
    description: "",
    members: "29207",
    slug: "hatsclub",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/517732495/178x100.jpg?w=178?w=384",
  },
  {
    name: "Hyderabad Travel Group",
    description:
      "Sick of waiting around for friends to go on trips? Not any more. Join our travel community now and travel with like-minded people! Our group travel is all about having new experiences, getting immersed in another culture, and growing your network.Join our WhatsApp travel community for trip announcements and updates (No chats; Only announcements): [https://chat.whatsapp.com/H76FglyXBcz31Pz7jDHsEf](https://chat.whatsapp.com/H76FglyXBcz31Pz7jDHsEf)FOLLOW US:\nWebsite: [https://www.unusualescapes.com](https://www.unusualescapes.com)\nFacebook: [https://www.facebook.com/unusualescapes](https://www.facebook.com/unusualescapes)\nTwitter: [https://twitter.com/unusualescapes ](https://twitter.com/unusualescapes)\nInstagram: [https://www.instagram.com/unusualescapes](https://www.instagram.com/unusualescapes)\nLinkedIn: [https://www.linkedin.com/company/unusual-escapes](https://www.linkedin.com/company/unusual-escapes)\nYouTube: [https://www.youtube.com/@unusualescapes](https://www.youtube.com/@unusualescapes)",
    members: "12717",
    slug: "hyderabad-travel-group",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/525517318/178x100.jpg?w=178?w=384",
  },
  {
    name: "Hyderabad Travellers Group",
    description:
      "Sick of waiting around for friends to go on trips? Not any more. Join our travel community now and travel with like-minded people! Our group travel is all about having new experiences, getting immersed in another culture, and growing your network.Join our WhatsApp travel community for trip announcements and updates (No chats; Only announcements): [https://chat.whatsapp.com/H76FglyXBcz31Pz7jDHsEf](https://chat.whatsapp.com/H76FglyXBcz31Pz7jDHsEf)FOLLOW US:\nWebsite: [https://www.unusualescapes.com](https://www.unusualescapes.com)\nFacebook: [https://www.facebook.com/unusualescapes](https://www.facebook.com/unusualescapes)\nTwitter: [https://twitter.com/unusualescapes ](https://twitter.com/unusualescapes)\nInstagram: [https://www.instagram.com/unusualescapes](https://www.instagram.com/unusualescapes)\nLinkedIn: [https://www.linkedin.com/company/unusual-escapes](https://www.linkedin.com/company/unusual-escapes)\nYouTube: [https://www.youtube.com/@unusualescapes](https://www.youtube.com/@unusualescapes)",
    members: "6956",
    slug: "hyderabad-travellers-group",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/471841196/178x100.jpg?w=178?w=384",
  },
  {
    name: "Edge Adventure Club",
    description: "",
    members: "6397",
    slug: "edgeadventureclub",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/500082309/178x100.jpg?w=178?w=384",
  },
  {
    name: "Backpackers & City Freaks Sports Club",
    description:
      "Hi City Freaks\nThis is for all Hyderabadi people who love to play sports..\nWe want to concentrate on all the games and sport activities...PLEASE LIKE US ON FACEBOOK - [https://www.facebook.com/BCFIndia.official/](https://www.facebook.com/BCFIndia.official/)",
    members: "4417",
    slug: "bcfsportsclub",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/472633774/178x100.jpg?w=178?w=384",
  },
  {
    name: "Backpackers and City Freaks (BCF) - Bikers Club / Long Drive",
    description:
      "Backpackers & City Freaks (fondly called as BCF) is a perfect group for people who are interested in treks, hikes, expeditions, backpacking adventure trips, leisure trips, water sport trips, camping, rock climbing, bouldering, horse riding, swimming, kayaking etc.Our tours are designed around – '3 interests'\n1. Adventure activities\n2. Weekend trips\n3. City life eventsWith 1000s of trips facilitated for more than 50,000 BCFians, we take care of all the stressful parts like transportation, and accommodation leaving you time to relax and enjoy a unique travel experience you wouldn’t be able to book on your own.\nAll ages are welcome. People who are new to travelling are also very welcome.More about our Trips:\nOur Monsoon trekking trips include places like Rajmachi, Kalsubai, Matheran, Harishchandragad, Bhimashankar, Rajgad fort, Katraj to Sinhagad (K2S) etc.Our leisure trips include places like Gokarna beaches, Murudeshwar, Vibhoothi waterfalls, Dandeli, Coorg, Chikmagalur, Pondycherry etc.Our City Freak events include KhajaGuda, Khila Ghanpur, Mallela Theertham waterfalls, Charikonda, Koil Sagar, Koil Konda, night camping events, Horse Riding, etcWhy travel with BCF?For any group bookings or any corporate events,\"All skill levels are welcome. I started this group to meet other outdoor enthusiasts. Looking forward to exploring the outdoors with everybody.\"\n~Raj Kiran, FounderMore about our Founder Raj Kiran:\nTedX talk at SREC: [https://www.youtube.com/watch?v=VWyseaVPg_A](https://www.youtube.com/watch?v=VWyseaVPg_A)\nRed FM Interview - Unsung Hero: Red FM interview – Independence day 2020",
    members: "2399",
    slug: "bcfbikersclub",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/508453187/178x100.jpg?w=178?w=384",
  },
  {
    name: "ClimbOn Adventure Club (affiliated to  IMF)",
    description:
      "Our goal is to facilitate fun, informative, inspirational and recreational outdoor adventure experiences.\nActivities include\n• Trekking\n• Climbing\n• Hiking\n• Bouldering\n• Camping\n• Adventure treks\n• Sports\n• Fitness\n• social activities \\Our state boasts of number of quality outdoor climbing locations all varying in location, scenery, rock quality and texture.\nClimbOn is registered under Government of Telangana and affiliated by IMF (IMFC003190)\nWe plans regular and spontaneous climbing gym sessions, organizes outdoor climbing and camping adventures. Club provide unique opportunity of learning from our certified trainer the basics of rock climbing and improving your top-roping skills and techniques. Our members are climbers of all experience levels. Whether you are new to the sport and looking to learn, experienced and in need of new partners, or new to town and trying to find the climbing community, ClimbOn can be your gateway to adventure.\nRock climbing got numerous benefits - get fit, lose weight, become stronger, balance body and mind, enhance problem solving ability.\nContact us on \\Please take out few mins your time and share your feedback and your experience\nI must appreciate all participants who showed extreme spirit of Adventure. \\[https://www.meetup.com/Theclimbon/about/comments/?op=all](https://www.meetup.com/Theclimbon/about/comments/?op=all)\nI want your feedback, It's very important for us to improve your experiences, kindly give your review on this event \\\\[https://www.climbonadventure.com](https://www.climbonadventure.com)\nClimbOn Naveen Kodela at +1 437-326-9876 (Canada)\nClimbOn Ashim at 9000567089\nPRESIDENT OF CLIMBON - Dheeraj Seshu - 9885538111\nVICE PRESIDENT OF CLIMBON- Sai Sidharth- 8099288178",
    members: "9821",
    slug: "theclimbon",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/446270692/178x100.jpg?w=178?w=384",
  },
  {
    name: "Hyderabad Travel Diaries",
    description:
      "Hello, I''d request people who're passionate in traveling to Join this group. This is a group for anyone interested in hiking, rock climbing, camping, kayaking, bouldering, etc. All skill levels are welcome. I started this group to meet other outdoor enthusiasts. Looking forward to exploring the outdoors with everybody.",
    members: "8885",
    slug: "hyderabad-travel-diaries",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/494049398/178x100.jpg?w=178?w=384",
  },
  {
    name: "Hyderabad Bicycling Club",
    description:
      "Wikipedia page: http://en.wikipedia.org/wiki/Hyderabad_bicycling_club",
    members: "11354",
    slug: "HyderabadBicyclingClub",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/512273161/178x100.jpg?w=178?w=384",
  },
  {
    name: "Nomadic Adventures - Subsidiary of Backpackers & City Freaks",
    description:
      "Backpackers & City Freaks (fondly called as BCF) is a perfect group for people who are interested in treks, hikes, expeditions, backpacking adventure trips, leisure trips, water sport trips, camping, rock climbing, bouldering, horse riding, swimming, kayaking etc.Our tours are designed around – '3 interests'\n1. Adventure activities\n2. Weekend trips\n3. City life eventsWith 1000s of trips facilitated for more than 50,000 BCFians, we take care of all the stressful parts like transportation, and accommodation leaving you time to relax and enjoy a unique travel experience you wouldn’t be able to book on your own.\nAll ages are welcome. People who are new to travelling are also very welcome.More about our Trips:\nOur Monsoon trekking trips include places like Rajmachi, Kalsubai, Matheran, Harishchandragad, Bhimashankar, Rajgad fort, Katraj to Sinhagad (K2S) etc.Our leisure trips include places like Gokarna beaches, Murudeshwar, Vibhoothi waterfalls, Dandeli, Coorg, Chikmagalur, Pondycherry etc.Our City Freak events include KhajaGuda, Khila Ghanpur, Mallela Theertham waterfalls, Charikonda, Koil Sagar, Koil Konda, night camping events, Horse Riding, etcWhy travel with BCF?For any group bookings or any corporate events,\"All skill levels are welcome. I started this group to meet other outdoor enthusiasts. Looking forward to exploring the outdoors with everybody.\"\n~Raj Kiran, Founder",
    members: "4703",
    slug: "nomadic-adventures",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/476499548/178x100.jpg?w=178?w=384",
  },
  {
    name: "Travel Adventure Group - Hyderabad",
    description: "",
    members: "14674",
    slug: "TAGroup",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/480645539/178x100.jpg?w=178?w=384",
  },
  {
    name: "Hyderabad Travel and Trekking Club",
    description: "",
    members: "17179",
    slug: "Hyderabad-Travel-Trekking-Club",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/490165756/178x100.jpg?w=178?w=384",
  },
  {
    name: "Hyderabad Trekkers",
    description: "",
    members: "8591",
    slug: "Hyderabad-Trekkers-Club",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/494326576/178x100.jpg?w=178?w=384",
  },
  {
    name: "National Adventure Club - Hyd",
    description: "",
    members: "7691",
    slug: "nac-hyd",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/472994111/178x100.jpg?w=178?w=384",
  },
  {
    name: "Hyderabad Adventures (Treks, Trips, City Events)",
    description:
      "This groups is for all outgoing and fun-loving people who want to attend meetups/treks/trips/events in and around Hyderabad.To all the hosts: If you want to host a meetup, we charge ONLY 100 rupees to post your events in this group.",
    members: "20223",
    slug: "hyderabad-adventure-treks-trips-city-events",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/472186616/178x100.jpg?w=178?w=384",
  },
  {
    name: "EDGE Adventures",
    description: "",
    members: "7410",
    slug: "edgeadventure",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/483394179/178x100.jpg?w=178?w=384",
  },
  {
    name: "Explorophilia - Subsidiary of Backpackers & City Freaks(BCF)",
    description:
      "Backpackers & City Freaks (fondly called as BCF) is a perfect group for people who are interested in treks, hikes, expeditions, backpacking adventure trips, leisure trips, water sport trips, camping, rock climbing, bouldering, horse riding, swimming, kayaking etc.Our tours are designed around – '3 interests'\n1. Adventure activities\n2. Weekend trips\n3. City life eventsWith 1000s of trips facilitated for more than 50,000 BCFians, we take care of all the stressful parts like transportation, and accommodation leaving you time to relax and enjoy a unique travel experience you wouldn’t be able to book on your own.\nAll ages are welcome. People who are new to travelling are also very welcome.More about our Trips:\nOur Monsoon trekking trips include places like Rajmachi, Kalsubai, Matheran, Harishchandragad, Bhimashankar, Rajgad fort, Katraj to Sinhagad (K2S) etc.Our leisure trips include places like Gokarna beaches, Murudeshwar, Vibhoothi waterfalls, Dandeli, Coorg, Chikmagalur, Pondycherry etc.Our City Freak events include KhajaGuda, Khila Ghanpur, Mallela Theertham waterfalls, Charikonda, Koil Sagar, Koil Konda, night camping events, Horse Riding, etcWhy travel with BCF?For any group bookings or any corporate events,\"All skill levels are welcome. I started this group to meet other outdoor enthusiasts. Looking forward to exploring the outdoors with everybody.\"\n~Raj Kiran, Founder",
    members: "3257",
    slug: "explorophilia",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/472036374/178x100.jpg?w=178?w=384",
  },
  {
    name: "escape and explore",
    description:
      "Welcome to Escape & Explore. We offers thrilling adventures, from scenic treks to offbeat getaways, designed to create unforgettable memories. Whether you seek excitement or tranquility, we tailor every experience just for you!Why us?\nWe at Escape & Explore personalize adventures led by expert guides, ensuring every journey is packed with excitement, relaxation, and discovery. Escape the ordinary and let us make your travel dreams a reality!",
    members: "1307",
    slug: "hyderabad-weekend-adventures-meetup-group",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/518628538/178x100.jpg?w=178?w=384",
  },
  {
    name: "BCF's",
    description:
      "Backpackers & City Freaks (fondly called as BCF) is a perfect group for people who are interested in treks, hikes, expeditions, backpacking adventure trips, leisure trips, water sport trips, camping, rock climbing, bouldering, horse riding, swimming, kayaking etc.\nOur tours are designed around – '3 interests'\n1. Adventure activities\n2. Weekend trips\n3. City life events\nWith 1000s of trips facilitated for more than 50,000 BCFians, we take care of all the stressful parts like transportation, and accommodation leaving you time to relax and enjoy a unique travel experience you wouldn’t be able to book on your own.\nAll ages are welcome. People who are new to travelling are also very welcome.\nMore about our Trips:\nOur Monsoon trekking trips include places like Rajmachi, Kalsubai, Matheran, Harishchandragad, Bhimashankar, Rajgad fort, Katraj to Sinhagad (K2S) etc.\nOur leisure trips include places like Gokarna beaches, Murudeshwar, Vibhoothi waterfalls, Dandeli, Coorg, Chikmagalur, Pondycherry etc.\nOur City Freak events include Khaja Guda, Khila Ghanpur, Mallela Theertham waterfalls, Charikonda, Koil Sagar, Koil Konda, night camping events, Horse Riding, etc\nWhy travel with BCF?For any group bookings or any corporate events,Phone Number: 8886123408WhatsApp Number: Click HereWebsite: [https://backpackersandcityfreaks.com/events](https://backpackersandcityfreaks.com/events)/Instagram: Click HereFacebook: Click HereBlog: [https://bcfblogs.com/about/](https://bcfblogs.com/about/)Backpacking Equipment: https://amzn.to/2XOGYknOther necessary items: https://amzn.to/3szke6jQuechua Products: https://amzn.to/2Lz8ArvCustomized T-shirts (Dry-fit): https://lnkd.in/eSYi9ff(Use BCF10 or BCFIAN as coupon code for discount)About our founder, Raj Kiran: [https://www.linkedin.com/in/rajkiran-badugu/](https://www.linkedin.com/in/rajkiran-badugu/)\"All skill levels are welcome. I started this group to meet other outdoor enthusiasts. Looking forward to exploring the outdoors with everybody.\"\n~Raj Kiran, Founder\nMore about our Founder Raj Kiran:\nTedX talk at SREC: [https://www.youtube.com/watch?v=VWyseaVPg_A](https://www.youtube.com/watch?v=VWyseaVPg_A)\nRed FM Interview - Unsung Hero: Red FM interview – Independence day 2020",
    members: "13502",
    slug: "trekking-biking-cycling-adventure-meetup-hyderabad",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/524410501/178x100.jpg?w=178?w=384",
  },
  {
    name: "Hyderabad Mastermind Club",
    description:
      "Hyderabad Mastermind Club for people in Hyderabad, join our events.",
    members: "35203",
    slug: "hyderabad-mastermind-club",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/523481497/178x100.jpg?w=178?w=384",
  },
  {
    name: "Osmania University Meetup Group",
    description:
      "Welcome to the Osmania University Meetup Group, where we combine our love for Yoga with outdoor walk. Join us for a walk and talk that connect us with nature along the way. this group is perfect for outdoor enthusiasts seeking a balance of physical and spiritual fulfillment. Let's explore and preserve the beauty of nature together, let’s explore the great outdoors, make new friends, and contribute to a healthier planet together!",
    members: "71",
    slug: "osmania-university-meetup-group",
  },
  {
    name: "HTC - Hyderabad Trekking Club(Company)",
    description:
      "HTC - Hyderabad Trekking Club is now HTC-Hyderabad Trekking Company.. HTC is to promote outdoor adventure activities and trekking in Telangana and Andhra Pradesh.  HTC is here just to connect people to the wonderful nature, which many of us have not experienced yet and also those who want to explore more. When we connect to nature, we explore picturesque mountains, places of natural beauty, making the environment beautiful and many other things. Having all this in life, provides refreshment to our soul and body.\nOutdoor Activities:\nTrekking, Hiking, Camping, Rock Climbing, Bouldering and other adventure sports.\nClub MemberShip:\nIts FREE !! Easy to register too!\nAge limit:\nEveryone above 18 years.\n12-18 (young members) can participate with parents permission.\n6-12 (kids) may participate along with parents.\nFAQ:\n1 ) I am new to trekking what is this actually ?\nans) Clickhere to know basic knowledge about trekking.\nOur mission:\n*Promoting adventure activities in and around Hyderabad and Andhra Pradesh.\n*Create awareness about nature and wilderness life.\n*Helping society by conducting social visits and eco friendly treks for poor and underprivileged children.\nWe trust “Living with nature, away from the city life, gives new encouragement for life”Contact Us:707 555 9641",
    members: "46766",
    slug: "thehtc",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/492505489/178x100.jpg?w=178?w=384",
  },
  {
    name: "NoMoFOMO ( Bangalore )",
    description:
      "NoMoFOMO Community by Plan The Unplanned\nNoMoFOMO, an innovative initiative by Plan The Unplanned, is more than just a community—it's a vibrant, dynamic space designed to bring people together, foster personal growth, and create unforgettable experiences. At its core, NoMoFOMO stands for \"No More Fear of Missing Out,\" and it lives up to its name by offering a plethora of opportunities to engage, learn, and have fun.\nMeet New People\nNoMoFOMO is the perfect place to expand your social circle. Whether you're new in town or just looking to meet like-minded individuals, our community events provide a welcoming environment to forge meaningful connections. From casual meetups to themed gatherings, there’s always a chance to connect with others and build lasting friendships.\nEngage in Workshops\nWe believe in the power of learning and growth. NoMoFOMO hosts a wide array of workshops that cater to diverse interests and skill levels. Whether you're looking to pick up a new hobby, enhance your professional skills, or simply explore a new passion, our workshops are led by experienced facilitators who ensure an enriching and engaging learning experience.\nLearn New Skills\nPersonal development is a cornerstone of the NoMoFOMO ethos. Our community members have access to numerous skill-building sessions, ranging from creative arts and crafts to tech and business skills. These sessions are designed to be interactive and hands-on, ensuring that you not only learn but also apply your newfound knowledge effectively.\nBe Part of Fun Activities\nFun is at the heart of everything we do. NoMoFOMO organizes a variety of activities that cater to all interests and energy levels. Whether it’s outdoor adventures, game nights, cultural events, or themed parties, there's always something exciting happening. Our activities are crafted to provide enjoyment, relaxation, and a break from the daily grind.\nJoin NoMoFOMO and say goodbye to the fear of missing out. Embrace a community where every day is an opportunity to discover, connect, and grow. With Plan The Unplanned’s NoMoFOMO, you're not just joining a community—you're becoming part of a movement towards a fuller, richer, and more connected life.",
    members: "11170",
    slug: "nomofomo",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/522645719/178x100.jpg?w=178?w=384",
  },
  {
    name: "Great Hyderabad Adventure Club - GHAC",
    description:
      "Great Hyderabad Adventure Club - GHAC is  a Not for Profit  Adventure and Trekking Club in Hyderabad, Telangana, India. ​The Club is  Affiliated to the Indian Mountaineering Foundation and organises activities in Adventure, Trekking, Hiking, Camping, Rock Climbing, Mountaineering, Outdoors, Nature and Adventure sports activities like Bouldering, Rock climbing and Rappelling to name a few of the activities that are conducted regularly every weekend in Hyderabad, Telangana and Rest of India.Membership is free and open to anyone over 18 years. Members  13 -17 years may participate with parental consent. Children above 6 - 12 years may participate along with parents only.Safety is priority for us - Our Outdoor Leaders are professionally trained and certified in their respective fields and know first aid and emergency handling.Our Mission is to get people together for the purposes of:\nPromote Adventure Activities\nNature Study, Awareness, Care and Conservation.\nLeadership and Youth DevelopmentContact us at support@ghac.in\nLike us on facebook.com/ghac.in\nJoin our facebook group at [https://www.facebook.com/groups/ghacevents/](https://www.facebook.com/groups/ghacevents/)Follow us on Instagram at [https://www.instagram.com/ghac.in/](https://www.instagram.com/ghac.in/)",
    members: "34198",
    slug: "great-hyderabad-adventure-club",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/513270694/178x100.jpg?w=178?w=384",
  },
  {
    name: "JUNGLE JAMBOREE",
    description: "",
    members: "9886",
    slug: "jamboorians",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/440611848/178x100.jpg?w=178?w=384",
  },
  {
    name: "Hyderabad's Active Adventure Travel Junkies",
    description: "",
    members: "6081",
    slug: "Offbeat-Adventure-Junkies",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/410793432/178x100.jpg?w=178?w=384",
  },
  {
    name: "Crag Ascenders",
    description:
      "Crag Ascenders: Raising the Bar in Rock ClimbingWelcome to Crag Ascenders, an invigorating community of climbers united by their shared enthusiasm for conquering new heights, pushing boundaries, and forming enduring connections. As an integral part of Crag Studio, our group is committed to providing an encouraging platform for growth, learning, and triumph within the realm of rock climbing.Crag Studio, our parent entity, stands as a premier indoor climbing haven that fosters skill development, personal achievement, and camaraderie. With Crag Ascenders, we extend this ethos outdoors by offering captivating climbing experiences, both on and off the crag. From engaging indoor challenges to exhilarating outdoor expeditions, workshops, and events, we cater to climbers at every stage of their journey.In the company of fellow enthusiasts, you'll have the chance to exchange insights, partake in thrilling climbing excursions, and forge lasting memories. As Crag Ascenders, we ascend, unite, and thrive in the world of rock climbing. Welcome to our dynamic community, where the ascent is just the beginning!",
    members: "278",
    slug: "crag-ascenders",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/515661578/178x100.jpg?w=178?w=384",
  },
  {
    name: "EXPLORER CLUB HYDERABAD (PVT LTD)",
    description:
      "Why Choose Explorers⁉️ 🤔\n✅ Explorers Provide Fixed Departures and we don't Cancel Trip from Our End*\n✅ Explorers Provide Complete Explorations Trip where you don't need to stick to fixed itinerary based on situation it changes.\n✅ We Create Transportation from Base to Base City... {Hyd-Hyd, BLR to BLR, DEL-DEL}\n✅ Explorers provide Private Vehicles to Pick you from Home and To drop at home as well { which Ensures Safety mostly for Female Travellers} (It saves time Booking Cabs and Avoid cancellations)\n✅ We value Your Time, Hence we take care of Process (Ticketing, Pick and drop, Web Check in In case of Flights)\n✅ YOur Time is Valuable. We Value Time.\n✅ Explorers are Expertise at Customised Trips\n✅ Explorers Pricing may Look Higher { We have added Value added Services to the trip hence we charge for Service}\nExplorations are on the way stay Tuned\nTravel Money Comes, Time Doesn't",
    members: "2072",
    slug: "explorers_company",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/500570800/178x100.jpg?w=178?w=384",
  },
  {
    name: "HRC _ Hyderabad Ramblers Club",
    description:
      "Welcome to HRC - Hyderabad Ramblers Club! We are a group of adventure enthusiasts who love exploring the great outdoors on weekends, weekdays, and evenings. Our activities include Hiking, Scuba diving, Trekking, Camping, Rock Climbing, Bouldering, Kayaking, Boating, Water Sports and Adventure Sports etc..Our mission is to ignite the spirit of exploration and trekking across the breathtaking landscapes of Telangana, Andhra Pradesh, Karnataka, Maharashtra, and Tamil Nadu. At HRC, we're more than just a club – we're a community of nature enthusiasts eager to connect with the great outdoors. Join us as we embark on unforgettable journeys, immersing ourselves in the awe-inspiring beauty of untouched wilderness. From challenging treks to serene nature walks, HRC offers something for everyone. Come, embrace the wonders of nature with us, and let your soul soar amidst the stunning vistas and vibrant landscapes.Experience the thrill of adventure and the tranquility of nature with HRC – where every step is a journey and every moment is an adventure!",
    members: "385",
    slug: "hrc-_-hyderabad-ramblers-club",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/519619749/178x100.jpg?w=178?w=384",
  },
  {
    name: "Adventurist Basecamp",
    description:
      "Welcome to the Adventurist Backpack Meetup Group! If you are passionate about adventure, exploring new destinations, trekking through nature, and backpacking your way around the world, then this group is for you. Join us for thrilling getaways, challenging trekking expeditions, exhilarating backpacking trips, and unforgettable travel experiences. Share tips, stories, and recommendations with like-minded adventurists as we venture into the great outdoors together. Whether you're a seasoned backpacker or just starting out, this group is the perfect place to connect with others who share your passion for adventure and exploration. Let's embark on epic journeys and create lasting memories together!",
    members: "206",
    slug: "adventurist-backpack",
    posterUrl:
      "https://secure-content.meetupstatic.com/images/classic-events/523431067/178x100.jpg?w=178?w=384",
  },
];
