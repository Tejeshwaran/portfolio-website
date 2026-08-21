import {
  MessageCircle,
  Globe,
  Headphones,
  BookOpen,
  Mic,
  Pencil,
  Star,
} from "lucide-react"; // Importing icons from the lucide-react library

const languages = {
  german: {
    name: "GERMAN",
    level: "B2",
    description: "Intermediate",
    type: "main",
    skills: [
      { name: "Listening", icon: Headphones, level: 4 },
      { name: "Reading", icon: BookOpen, level: 4 },
      { name: "Speaking", icon: Mic, level: 4 },
      { name: "Writing", icon: Pencil, level: 4 },
    ],
    note: "Not yet the master but still making progress."
  },

  english: {
    name: "ENGLISH",
    level: "C1",
    description: "Advanced",
    type: "secondary",
    skills: [
      { name: "Listening", icon: Headphones, level: 5 },
      { name: "Reading", icon: BookOpen, level: 5 },
      { name: "Speaking", icon: Mic, level: 5 },
      { name: "Writing", icon: Pencil, level: 5 },
    ],
    note: "Fluent in communication and professional use.",
  },

  tamil: {
    name: "TAMIL",
    level: "NATIVE",
    description: "Native Speaker",
    type: "secondary",
    skills: [
      { name: "Listening", icon: Headphones, level: 5 },
      { name: "Reading", icon: BookOpen, level: 5 },
      { name: "Speaking", icon: Mic, level: 5 },
      { name: "Writing", icon: Pencil, level: 5 },
    ],
    note: "No language better than my mother tongue.",
  },
};



function LanguageSkills({ language }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
      {language.skills.map((skill) => {
        const Icon = skill.icon;

        return (
          <div
            key={skill.name}
            className="text-center group/skill"
          >
            <div className="flex justify-center mb-3">
              <Icon
                size={38}
                strokeWidth={1.8}
                className="text-red-500 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              />
            </div>

            <p className="text-white font-medium text-sm">
              {skill.name}
            </p>

            

            <p className="text-red-500 text-sm mt-3">
              {language.level === "NATIVE"
                ? "Native"
                : skill.level === 5
                ? "Excellent"
                : "Good"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function LanguageCard({ language }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border border-red-500/30
        bg-gradient-to-br from-red-950/30 via-black/80 to-black
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(239,68,68,0.08)]
        transition-all duration-500
        hover:border-red-500/70
      "
    >
      {/* Red glow */}
      <div
        className="
          absolute
          -top-32
          -right-32
          w-64
          h-64
          bg-red-600/10
          rounded-full
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      <div className="relative z-10 p-7">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="
                w-10 h-10
                rounded-xl
                bg-red-500/10
                border border-red-500/20
                flex items-center justify-center
              "
            >
              <MessageCircle
                size={22}
                className="text-red-500"
              />
            </div>

            <h3 className="text-2xl font-bold text-red-500">
              {language.name}
            </h3>
          </div>

          
        </div>

        {/* Level */}
        <div className="mt-6 flex items-end gap-3">
          <span className="text-5xl md:text-6xl font-bold text-red-500">
            {language.level}
          </span>

          <span className="text-gray-300 mb-2">
            {language.description}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-6" />

        {/* Hidden / expandable content */}
        <div
          className="
            max-h-0
            opacity-0
            overflow-hidden
            transition-all
            duration-500
            group-hover:max-h-[500px]
            group-hover:opacity-100
          "
        >
          <LanguageSkills language={language} />

          {language.note && (
            <div
              className="
                flex items-center gap-3
                mt-7
                px-4 py-3
                rounded-xl
                border border-white/10
                bg-white/[0.02]
              "
            >
              <Star
                size={20}
                fill="currentColor"
                className="text-red-500 shrink-0"
              />

              <p className="text-gray-300 text-sm">
                {language.note}
              </p>
            </div>
          )}
        </div>

        {/* Hover hint */}
        <p
          className="
            text-center
            text-xs
            text-gray-500
            mt-5
            transition-all
            duration-300
            group-hover:opacity-0
          "
        >
          Hover to explore
        </p>
      </div>
    </div>
  );
}

export default function Languages() {
  return (
    <section
      id="languages"
      className="
        relative
        bg-black
        text-white
        py-24
        px-6
        overflow-hidden
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-20
            left-1/2
            -translate-x-1/2
            w-[600px]
            h-[300px]
            bg-red-600/10
            blur-[140px]
            rounded-full
          "
        />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Section title */}
        <div className="text-center mb-14">
          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-3">
            Communication
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Language <span className="text-red-500">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I speak three languages: English, Deutsch… and Google Translate😎. Just Kidding!!!😂
          </p>
        </div>

        {/* German - TOP */}
        <div className="mb-6">
          <LanguageCard language={languages.german} />
        </div>

        {/* English + Tamil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LanguageCard language={languages.english} />
          <LanguageCard language={languages.tamil} />
        </div>

      </div>
    </section>
  );
}