import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThv_Eln478MbyScNgvUEwHe8E4c_o6KUMFHg&s' },
    { name: 'CSS', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRkTTDrLQr_SMM_z4EUh3OL7EBItUoATnMw&s' },
    { name: 'JavaScript', imageUrl: 'https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo.png' },
    { name: 'React', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'TypeScript', imageUrl: 'https://www.svgrepo.com/show/374144/typescript.svg' },
    { name: 'Tailwind CSS', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Bootstrap', imageUrl: 'https://dh.virginia.edu/system/files/styles/large/private/bootstrap-stack.png?itok=b_S8F9nO' },
    { name: 'Next.js', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
    { name: 'Node.js', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'PostgreSQL', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJiLi1XmTTdTIwS8R876hTxZIzUr0sOkjU8nn6UEvg-HE6cqT5tgGJQxHwP3kXqolEBaU&usqp=CAU' },
    { name: 'MySQL', imageUrl: 'https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png' },
    { name: 'MongoDB', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
    { name: 'Prisma', imageUrl: 'https://yt3.googleusercontent.com/1oQc-j55vr_tnNhIWvSTxSPeV9cPpZyC3IoTr4zl6oUvEK50z9PjtfvKfyL8qC-sNbcQQmYg=s900-c-k-c0x00ffffff-no-rj' },
    { name: 'SQLite', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EQrOHs71zybtJaif4krFTC1lkSbypABkFZcZ7xDNG9hJ39Rh4ZMQWXoVDl3C-SHLQco&usqp=CAU' },
    { name: 'Git', imageUrl: 'https://thumbs.dreamstime.com/b/astana-kazakhstan-july-git-icon-logo-vector-symbol-198642057.jpg' },
    { name: 'GitHub', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
    { name: 'Vercel', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAuKrVgOa4BJxUnH4gdJ5TV0m2IFEMjLJ2g&s' },
    { name: 'C++', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
    { name: 'Python', imageUrl: 'https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png' },
    { name: 'Numpy', imageUrl: 'https://media.licdn.com/dms/image/D4D12AQG7FHyRGR1mRg/article-cover_image-shrink_720_1280/0/1661493497844?e=2147483647&v=beta&t=1tqk7S08HAnSoCD9nn3fGhNWIeKJHbICoVN0uwDO7M4' },
    { name: 'Pandas', imageUrl: 'https://miro.medium.com/v2/resize:fit:366/1*uyUj__HJekKIkx58kMxlcA.png' },
  ];

  return (
    <div className="flex flex-col items-center pt-8">
      <h1 className="text-3xl font-bold my-6 text-slate-500 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-transparent shadow-lg tracking-wider">My Technical Arsenal</h1>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 sm:p-6 m-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 sm:border-8 border-slate-500 p-1 sm:p-2 bg-white"
            />
            <p className="mt-2 text-xs sm:text-sm font-medium text-stone-400">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;