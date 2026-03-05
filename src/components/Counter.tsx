import { useEffect, useState, useRef } from 'react';
import { Users, Handshake, Calendar } from 'lucide-react';

interface CounterItemProps {
  icon: React.ElementType;
  end: number;
  label: string;
  suffix?: string;
}

function CounterItem({ icon: Icon, end, label, suffix = '+' }: CounterItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return (
    <div
      ref={ref}
      className="text-center group hover:scale-105 transition-transform duration-300"
    >
      <div className="w-20 h-20 bg-gradient-to-br from-[#2DAAEF] to-[#1e88cc] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-shadow">
        <Icon className="text-white" size={40} />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-gray-300 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-400 font-medium">{label}</div>
    </div>
  );
}

export default function Counter() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2DAAEF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2DAAEF] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#2DAAEF] font-semibold text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Years of excellence in delivering premium IT solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto text-white">
          <CounterItem icon={Users} end={100} label="Happy Customers " />
          <CounterItem icon={Handshake} end={20} label="Trusted Partners" />
          <CounterItem icon={Calendar} end={10} label="Years of Experience" />
        </div>
      </div>
    </section>
  );
}
