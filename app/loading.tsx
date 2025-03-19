"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50" style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", transform:"translate(-50%, -50%)", position:"fixed", top:"50%", left:"50%"}}>
      <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
