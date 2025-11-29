function IconLabel({ icon: IconComp, children }: { icon: any; children: React.ReactNode }) {
  const Icon = IconComp;
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-5 h-5 text-slate-700" />
      <span className="text-slate-800 font-medium">{children}</span>
    </div>
  );
}

export default IconLabel;