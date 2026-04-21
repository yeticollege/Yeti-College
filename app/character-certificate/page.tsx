"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react';
import { User, MapPin, Award, Calendar, Camera, Upload, CheckCircle, GraduationCap } from 'lucide-react';

// Define the courses and their faculties
const facultyData = {
  "Humanities and Social Sciences": ["BCA", "BSW", "BA"],
  "Management": ["BBS", "BIM", "BHM", "BBA"],
  "Science & Technology": ["B.Sc. CSIT", "BIT"]
};

interface StudentForm {
  fullName: string;
  parentName: string;
  municipality: string;
  wardNo: string;
  district: string;
  faculty: string;
  program: string;
  cgpa: string;
  outOfCgpa: string;
  dobBS: string;
  dobAD: string;
  photo: File | null;
}

const CertificateForm: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<StudentForm>({
    fullName: '',
    parentName: '',
    municipality: '',
    wardNo: '',
    district: '',
    faculty: '',
    program: '',
    cgpa: '',
    outOfCgpa: '4.00',
    dobBS: '',
    dobAD: '',
    photo: null,
  });

  // 1. Auto-convert BS to AD (Mock logic - in production use 'nepali-date-converter' package)
  useEffect(() => {
    if (formData.dobBS.match(/^\d{4}\/\d{2}\/\d{2}$/)) {
      // Simplistic mock: subtract 56 years, 8 months, 17 days roughly
      // In a real app: import NepaliDate from 'nepali-date-converter'
      const [y, m, d] = formData.dobBS.split('/').map(Number);
      if (y > 2000 && m <= 12 && d <= 32) {
        const adYear = y - 57; 
        setFormData(prev => ({ ...prev, dobAD: `${adYear}-${m.toString().padStart(2,'0')}-${d.toString().padStart(2,'0')}` }));
      }
    }
  }, [formData.dobBS]);

  // 2. Validation: Enable button only if all required fields are filled
  const isFormValid = 
    formData.fullName && formData.parentName && formData.municipality && 
    formData.wardNo && formData.district && formData.faculty && 
    formData.program && formData.cgpa && formData.dobBS && formData.photo;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value, ...(name === 'faculty' ? { program: '' } : {}) }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Concept: send to backend /api/students
    console.log("Submitting to DB:", formData);
    alert("Record successfully saved to Database!");
  };

  const inputClass = "w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all bg-white text-slate-700 shadow-sm";
  const labelClass = "text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1 block ml-1";

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 flex justify-center">
      <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 overflow-hidden border border-slate-100">
        
        {/* Header Branding */}
        <div className="bg-slate-900 p-10 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl font-black tracking-tight">YETI INTERNATIONAL COLLEGE</h1>
            <p className="text-slate-400 font-medium">Digital Records & Character Certificate Issuance</p>
          </div>
          <div className="absolute right-[-20px] top-[-20px] opacity-10">
            <GraduationCap size={200} />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Column 1 & 2: Main Details */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Basic Info */}
              <section>
                <div className="flex items-center gap-2 mb-6 text-blue-600 border-b pb-2">
                  <User size={18} strokeWidth={2.5} />
                  <h2 className="font-bold uppercase text-xs tracking-wider">Student Profile</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className={labelClass}>Student Full Name</label>
                    <input type="text" name="fullName" onChange={handleChange} placeholder="e.g. Chandan Kumar Kushwaha" className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>Parent/Guardian Name</label>
                    <input type="text" name="parentName" onChange={handleChange} className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>District</label>
                    <input type="text" name="district" onChange={handleChange} placeholder="Rautahat" className={inputClass} required />
                  </div>
                  <div className="md:col-span-1">
                    <label className={labelClass}>Gaupalika / Nagarpalika</label>
                    <input type="text" name="municipality" onChange={handleChange} className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>Ward No.</label>
                    <input type="number" name="wardNo" onChange={handleChange} className={inputClass} required />
                  </div>
                </div>
              </section>

              {/* Academic Info */}
              <section>
                <div className="flex items-center gap-2 mb-6 text-emerald-600 border-b pb-2">
                  <Award size={18} strokeWidth={2.5} />
                  <h2 className="font-bold uppercase text-xs tracking-wider">Academic Performance</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Select Faculty</label>
                    <select name="faculty" onChange={handleChange} className={inputClass} required>
                      <option value="">-- Select Faculty --</option>
                      {Object.keys(facultyData).map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Select Program / Course</label>
                    <select name="program" onChange={handleChange} className={inputClass} disabled={!formData.faculty} required>
                      <option value="">-- Select Program --</option>
                      {formData.faculty && facultyData[formData.faculty as keyof typeof facultyData].map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>CGPA Obtained</label>
                    <input type="number" step="0.01" name="cgpa" onChange={handleChange} placeholder="2.98" className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>Out of (Scale)</label>
                    <input type="number" step="0.01" name="outOfCgpa" value={formData.outOfCgpa} onChange={handleChange} className={inputClass} required />
                  </div>
                </div>
              </section>
            </div>

            {/* Column 3: Photo & Dates */}
            <div className="space-y-8">
              {/* Photo Upload */}
              <section>
                <label className={labelClass}>Student Portrait</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`group relative w-full aspect-[3/4] rounded-3xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden
                  ${photoPreview ? 'border-blue-500 shadow-xl shadow-blue-100' : 'border-slate-200 hover:border-blue-400 hover:bg-blue-50'}`}
                >
                  {photoPreview ? (
                    <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center p-6">
                      <div className="bg-slate-50 p-4 rounded-2xl mb-3 inline-block text-slate-400 group-hover:text-blue-500 transition-colors">
                        <Camera size={40} />
                      </div>
                      <p className="text-xs font-bold text-slate-400">UPLOAD PHOTO</p>
                    </div>
                  )}
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                </div>
              </section>

              {/* Date Conversion Section */}
              <section className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-4">
                <div className="flex items-center gap-2 text-orange-600 border-b border-orange-100 pb-2 mb-2">
                  <Calendar size={16} strokeWidth={2.5} />
                  <h2 className="font-bold uppercase text-[10px] tracking-widest">Date of Birth</h2>
                </div>
                <div>
                  <label className={labelClass}>Bikram Sambat (B.S.)</label>
                  <input type="text" name="dobBS" onChange={handleChange} placeholder="YYYY/MM/DD" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Anno Domini (A.D.) - Auto</label>
                  <input type="text" value={formData.dobAD} readOnly className={`${inputClass} bg-slate-100 border-transparent text-slate-500 font-mono`} placeholder="Auto-fills..." />
                </div>
              </section>
            </div>
          </div>

          {/* Submit Footer */}
          <div className="pt-10 border-t border-slate-100 flex flex-col items-center">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full md:w-96 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-500 shadow-2xl
                ${isFormValid 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white translate-y-0 shadow-blue-300 active:scale-95' 
                  : 'bg-slate-100 text-slate-300 translate-y-0 cursor-not-allowed border border-slate-200 shadow-none'
                }`}
            >
              <CheckCircle size={22} />
              {isFormValid ? 'SAVE TO DATABASE' : 'COMPLETE FORM'}
            </button>
            <p className="text-slate-400 text-[10px] mt-4 font-bold uppercase tracking-widest">
              Issue Date will be recorded as: {new Date().toLocaleDateString()}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CertificateForm;