import fortfolioImg1 from "../../../assets/projectimg/fortfolio.png";
import fortfolioImg2 from "../../../assets/projectimg/fortfolio2.png";
import kovalt_new_1 from "../../../assets/projectimg/kovalt_new_1.png";
import interviewImg1 from "../../../assets/projectimg/interview1.png";

export const projects = [
  {
    title: "Riot Games 게임사의 전적검색 사이트",
    date: "2024.09 ~ Present",
    projecttype: "Team",
    description:
      "Riot Games 게임사에서 서비스 중인 게임의 전적검색 및 정보 제공 사이트",
    image1: kovalt_new_1,
    // githubUrl: "https://github.com/ydsic/kovalt",
    // liveUrl: "https://kovalt.info",
    skills: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Node.js",
      "MongoDB",
      "Jenkins",
      "Docker",
      "Github",
      "Unix",
      "Raspberry-Pi",
    ],
  },
  {
    title: "나의 인터뷰 메이트",
    date: "2025.06 ~ 2025.08",
    projecttype: "Team",
    description:
      "ChatGPT API를 활용한 신입 프론트엔드 개발자들의 기술 면접 연습 도우미",
    image1: interviewImg1,
    githubUrl: "https://github.com/ydsic/my_interview_mate",
    liveUrl: "https://my-interview-mate.vercel.app/",
    skills: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Supabase",
      "Github",
      "Vercel",
      "OpenAI API",
    ],
  },

  {
    title: "시고르토크",
    date: "2025.07 ~ 2025.08",
    projecttype: "Team",
    description:
      "인구 소멸 지역의 인구 유치 및 지역 발전을 위한 청년층과 노년층의 1:1 커피챗 플랫폼",
    image1: "/images/.png",
    image2: "/images/.png",
    skills: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Spring",
      "MySQL",
      "Docker",
      "OpenAI API",
      "Github",
    ],
  },
  {
    title: "최종 프로젝트",
    date: "2025.08 ~ 2025.09",
    projecttype: "Team",
    description: "Project 프로젝트 설명 부분",
    image1: "/images/.png",
    image2: "/images/.png",
    skills: ["React", "TypeScript", "TailwindCSS", "Zustand"],
  },
  {
    title: "개인 Portfolio & Blog 페이지 제작",
    date: "2025.04 ~ Present",
    projecttype: "Personal",
    description: "React + Tailwind로 만든 반응형 개인 포트폴리오 페이지",
    image1: fortfolioImg1,
    image2: fortfolioImg2,
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    skills: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Vercel",
      "Github",
    ],
  },
];
