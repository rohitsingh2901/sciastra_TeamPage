import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const TeamPage = () => {
  const bio = [
    {
      "name": "Mandar Tornekar",
      "affiliation": "GMC Dhule",
      "img" : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1688763403~exp=1688764003~hmac=aaf85fe88a9cb7144b64c8c3750fc9b80e3d598a5ff89805223b2d75e73af027",
    },
    {
      "name": "Sehasree Mohanta",
      "affiliation": "IACS",
      "img" : "Team photos/1businessman-character-avatar-isolated_24877-60111-removebg-preview (1).png"
    },
    {
      "name": "Piyush Verma",
      "affiliation": "IISER Pune",
      "img" : "Team photos/2businessman-character-avatar-isolated_24877-60111-removebg-preview.png"
    },
    {
      "name": "Aditya Nayak",
      "affiliation": "IISER Mohali",
      "img" : "Team photos/3businessman-character-avatar-isolated_24877-60111-removebg-preview (7).png"
    },
    {
      "name": "Tiasha Das",
      "affiliation": "IISER Berhampur",
      "img" : "Team photos/4businessman-character-avatar-isolated_24877-60111-removebg-preview (6).png"
    },
    {
      "name": "Mandar Tornekar",
      "affiliation": "GMC Dhule",
      "img" : "Team photos/5businessman-character-avatar-isolated_24877-60111-removebg-preview (5).png"
    },
    {
      "name": "Sehasree Mohanta",
      "affiliation": "IACS",
      "img" : "Team photos/6businessman-character-avatar-isolated_24877-60111-removebg-preview (4).png"
    },
    {
      "name": "Piyush Verma",
      "affiliation": "IISER Pune",
      "img" : "Team photos/7businessman-character-avatar-isolated_24877-60111-removebg-preview (3).png"
    },
    {
      "name": "Aditya Nayak",
      "affiliation": "IISER Mohali",
      "img" : "Team photos/8businessman-character-avatar-isolated_24877-60111-removebg-preview (2).png"
    },
    {
      "name": "Tiasha Das",
      "affiliation": "IISER Berhampur",
      "img":"Team photos/3businessman-character-avatar-isolated_24877-60111-removebg-preview (7).png"
    }
  ]
  const phy = [
    {
      "name": "Siddhart Bhatt",
      "affiliation": "IISER ",
      "img": "Team photos/1businessman-character-avatar-isolated_24877-60111-removebg-preview (1).png"
    },
    {
      "name": "Ripunjay Dwivedi",
      "affiliation": "CMI",
      "img": "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1688763403~exp=1688764003~hmac=aaf85fe88a9cb7144b64c8"
    },
    {
      "name": "Tanmay",
      "affiliation": "NISER",
      "img": "Team photos/8businessman-character-avatar-isolated_24877-60111-removebg-preview (2).png"
    },
    {
      "name": "Sagar Rathore",
      "affiliation": "IISER Berhampur",
      "img": "Team photos/4businessman-character-avatar-isolated_24877-60111-removebg-preview (6).png"
    },
    {
      "name": "Abhay Gupta",
      "affiliation": "IIT Bombay",
      "img": "Team photos/7businessman-character-avatar-isolated_24877-60111-removebg-preview (3).png"
    },
    {
      "name": "Siddhart Bhatt",
      "affiliation": "IISER ",
      "img": "Team photos/5businessman-character-avatar-isolated_24877-60111-removebg-preview (5).png"
    },
    {
      "name": "Ripunjay Dwivedi",
      "affiliation": "CMI",
      "img": "Team photos/2businessman-character-avatar-isolated_24877-60111-removebg-preview.png"
    },
    {
      "name": "Tanmay",
      "affiliation": "NISER",
      "img": "Team photos/3businessman-character-avatar-isolated_24877-60111-removebg-preview (7).png"
    },
    {
      "name": "Sagar Rathore",
      "affiliation": "IISER Berhampur",
      "img": "Team photos/6businessman-character-avatar-isolated_24877-60111-removebg-preview (4).png"
    },
    {
      "name": "Abhay Gupta",
      "affiliation": "IIT Bombay",
      "img": "Team photos/3businessman-character-avatar-isolated_24877-60111-removebg-preview (7).png"
    }
  ];
  const math = [
    {
      "name": "Saumya Prakash",
      "affiliation": "NISER",
      "img": "Team photos/5businessman-character-avatar-isolated_24877-60111-removebg-preview (5).png"
    },
    {
      "name": "Saumya Shisodiya",
      "affiliation": "HBTU Kanpur",
      "img": "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1688763403~exp=1688764003~hmac=aaf85fe88a9cb7144b64c8"
    },
    {
      "name": "Veena Sri",
      "affiliation": "IISER TVM",
      "img": "Team photos/6businessman-character-avatar-isolated_24877-60111-removebg-preview (4).png"
    },
    {
      "name": "Adityarup Laha",
      "affiliation": "ISI, Kolkata",
      "img": "Team photos/2businessman-character-avatar-isolated_24877-60111-removebg-preview.png"
    },
    {
      "name": "MD JAVED AKHTAR",
      "affiliation": "IISER,KOLKATA",
      "img": "Team photos/3businessman-character-avatar-isolated_24877-60111-removebg-preview (7).png"
    },
    {
      "name": "Saumya Prakash",
      "affiliation": "NISER",
      "img": "Team photos/7businessman-character-avatar-isolated_24877-60111-removebg-preview (3).png"
    },
    {
      "name": "Saumya Shisodiya",
      "affiliation": "HBTU Kanpur",
      "img": "Team photos/8businessman-character-avatar-isolated_24877-60111-removebg-preview (2).png"
    },
    {
      "name": "Veena Sri",
      "affiliation": "IISER TVM",
      "img": "Team photos/1businessman-character-avatar-isolated_24877-60111-removebg-preview (1).png"
    },
    {
      "name": "Adityarup Laha",
      "affiliation": "ISI, Kolkata",
      "img": "Team photos/4businessman-character-avatar-isolated_24877-60111-removebg-preview (6).png"
    },
    {
      "name": "MD JAVED AKHTAR",
      "affiliation": "IISER,KOLKATA",
      "img": "Team photos/3businessman-character-avatar-isolated_24877-60111-removebg-preview (7).png"
    }
  ];
  const chem = [
    {
      "name": "Parth Kumar Singh",
      "affiliation": "IIT,Jodhpur",
      "img": "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1688763403~exp=1688764003~hmac=aaf85fe88a9cb7144b64c8"
    },
    {
      "name": "Mandar Tornekar",
      "affiliation": "GMC Dhule",
      "img": "Team photos/1businessman-character-avatar-isolated_24877-60111-removebg-preview (1).png"
    },
    {
      "name": "Vivek Dwivedi",
      "affiliation": "NISER",
      "img": "Team photos/2businessman-character-avatar-isolated_24877-60111-removebg-preview.png"
    },
    {
      "name": "Shruti",
      "affiliation": "CEBS,Mumbai",
      "img": "Team photos/3businessman-character-avatar-isolated_24877-60111-removebg-preview (7).png"
    },
    {
      "name": "Anshuman Patra",
      "affiliation": "IISER, Berhampur",
      "img": "Team photos/4businessman-character-avatar-isolated_24877-60111-removebg-preview (6).png"
    },
    {
      "name": "Parth Kumar Singh",
      "affiliation": "IIT,Jodhpur",
      "img": "Team photos/5businessman-character-avatar-isolated_24877-60111-removebg-preview (5).png"
    },
    {
      "name": "Mandar Tornekar",
      "affiliation": "GMC Dhule",
      "img": "Team photos/6businessman-character-avatar-isolated_24877-60111-removebg-preview (4).png"
    },
    {
      "name": "Vivek Dwivedi",
      "affiliation": "NISER",
      "img": "Team photos/7businessman-character-avatar-isolated_24877-60111-removebg-preview (3).png"
    },
    {
      "name": "Shruti",
      "affiliation": "CEBS,Mumbai",
      "img": "Team photos/8businessman-character-avatar-isolated_24877-60111-removebg-preview (2).png"
    },
    {
      "name": "Anshuman Patra",
      "affiliation": "IISER, Berhampur",
      "img": "Team photos/3businessman-character-avatar-isolated_24877-60111-removebg-preview (7).png"
    }
  ];
  const advisor = [{
    "name": "Dr. Omkar",
    "affiliation": "IIT Madras",
    "img": "Team photos/8businessman-character-avatar-isolated_24877-60111-removebg-preview (2).png"
  },
  {
    "name": "Anshuman Patra",
    "affiliation": "IISER, Berhampur",
    "img": "Team photos/3businessman-character-avatar-isolated_24877-60111-removebg-preview (7).png"
  },
  {
    "name": "Tanmay Singh",
    "affiliation": "NISER",
    "img": "Team photos/8businessman-character-avatar-isolated_24877-60111-removebg-preview (2).png"
  },
  {
    "name": "Sagar Rathore",
    "affiliation": "IISER Berhampur",
    "img": "Team photos/4businessman-character-avatar-isolated_24877-60111-removebg-preview (6).png"
  },
  {
    "name": "Abhay Gupta",
    "affiliation": "IIT Bombay",
    "img": "Team photos/7businessman-character-avatar-isolated_24877-60111-removebg-preview (3).png"
  },
  {
    "name": "Siddhart Bhatt",
    "affiliation": "IISER ",
    "img": "Team photos/5businessman-character-avatar-isolated_24877-60111-removebg-preview (5).png"
  },
  {
    "name": "Ripunjay Dwivedi",
    "affiliation": "CMI",
    "img": "Team photos/2businessman-character-avatar-isolated_24877-60111-removebg-preview.png"
  },
]
  
  const openEmailClient = (name) => {
    window.location.href = `mailto:${name}`
  };
  
  
  
  
  const options = {
    autoHeightClass: "my-12",
    autoplay: true,
    dots: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    mouseDrag:true,
    touchDrag:true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  };

  const uni = [
    {
      name: "Massachusetts Institute of Tech.",
      location: "Cambridge, USA",
      description: "Renowned for its cutting-edge research and innovation.",
      color: "#FAEBD7",
    },
    {
      name: "Stanford University",
      location: "Stanford, California, USA",
      description: "A leader in various scientific disciplines and technology.",
      color: "#7FFFD4",
    },
    {
      name: "Harvard University",
      location: "Cambridge, Massachusetts, USA",
      description:
        "An Ivy League institution with a strong emphasis on research.",
      color: "#F0FFFF",
    },
    {
      name: "Caltech",
      location: "Pasadena, California, USA",
      description:
        "Known for its contributions to physics, astronomy, and engineering.",
      color: "#AFEEEE",
    },
    {
      name: "University of Oxford",
      location: "Oxford, United Kingdom",
      description:
        "A historic institution with a global reputation for excellence.",
      color: "#FFF8DC",
    },
    {
      name: "University of Cambridge",
      location: "Cambridge, United Kingdom",
      description: "Renowned for its contributions to science and research.",
      color: "#A9A9A9",
    },
    {
      name: "ETH Zurich",
      location: "Zurich, Switzerland",
      description:
        "A leading European university known for its technical and scientific education.",
      color: "#FFE4B5",
    },
    {
      name: "Princeton University",
      location: "Princeton, New Jersey, USA",
      description:
        "Combines research and teaching in both the sciences and humanities.",
      color: "#F0FFF0",
    },
    {
      name: "Yale University",
      location: "New Haven, Connecticut, USA",
      description: "Known for its diverse scientific research and programs.",
      color: "#F0E68C",
    },
  ];

  return (
    <>
      <div>
        <h1 className="font-extrabold text-center my-3">
          Welcome to <span className="text-purple-600">Team</span> <span className="text-purple-600">Page</span>
        </h1>
        <h3 className="font-bold text-center my-5">
          Learn from{" "}
          <span className="font-extrabold text-orange-600">scientists</span> and{" "}
          <span className="font-extrabold text-green-600">
            research scholar
          </span>{" "}
          from the top{" "}
          <span className="font-extrabold text-yellow-600">institutes</span> in
          the world
        </h3>
      </div>
      <div className="container flex flex-wrap justify-evenly">
        {uni.map((institute) => (
          <div
            class="card mb-3"
            style={{ maxWidth: "18rem", background: institute.color }}
          >
            <div class="card-header font-bold">{institute.name}</div>
            <div class="card-body">
              <p class="card-title font-medium">
                <i class="fas fa-location-arrow"></i> {institute.location}
              </p>
              <p class="card-text">{institute.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <h1 className="font-bold text-center my-5">
          Meet your <span className="text-purple-600">mentors</span>
        </h1>
        <h3 className="font-bold my-12">Biology</h3>
        <OwlCarousel className="flex owl-carousel owl-theme mt-8" {...options}>
        {phy.map((p) => (<div className="item">
          <img
            
            alt="team"
            src={p.img}
          ></img>
          <p className="text-center">{p.name}-{p.affiliation}</p>
          </div>))}
        </OwlCarousel>
        <h3 className="font-bold my-12">Physics</h3>
        <OwlCarousel className="flex owl-carousel owl-theme mt-8" {...options}>
        {bio.map((b) => (<div className="item">
          <img
            
            alt="team"
            src={b.img}
          ></img>
          <p className="text-center">{b.name}-{b.affiliation}</p>
          </div>))}
        </OwlCarousel>
        <h3 className="font-bold my-12">Mathematics</h3>
        <OwlCarousel className="flex owl-carousel owl-theme mt-8" {...options}>
        {math.map((m) => (<div className="item">
          <img
            
            alt="team"
            src={m.img}
          ></img>
          <p className="text-center">{m.name}-{m.affiliation}</p>
          </div>))}
        </OwlCarousel>
        <h3 className="font-bold my-12">Chemistry</h3>
        <OwlCarousel className="flex owl-carousel owl-theme mt-8" {...options}>
        {chem.map((c) => (<div className="item">
          <img
            
            alt="team"
            src={c.img}
          ></img>
          <p className="text-center">{c.name}-{c.affiliation}</p>
          </div>))}
        </OwlCarousel>
      </div>
      <div className="container">
      <h1 className="font-bold text-center my-5">
          Mentor and <span className="text-purple-600">Advisor</span>
        </h1>
        <OwlCarousel className="flex owl-carousel owl-theme mt-8" {...options}>
        {advisor.map((a) => (<div className="item">
          <img
            
            alt="team"
            src={a.img}
          ></img>
          <p className="text-center">{a.name}-{a.affiliation}<button onClick={()=>openEmailClient(a.name)} className="btnn btn-sm">Message him now</button></p>
          
          </div>))}
        </OwlCarousel>
      </div>

    </>
  );
};

export default TeamPage;
