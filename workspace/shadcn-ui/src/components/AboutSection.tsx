import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Target, Clock } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional team with years of experience in business solutions and customer service.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'International standards and quality assurance in all our services and solutions.'
    },
    {
      icon: Target,
      title: 'Focused Approach',
      description: 'Dedicated to providing tailored solutions that meet your specific business needs.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to ensure your business operations run smoothly.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            About Our Company
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About Land Hùng Phát
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Land Hùng Phát is a trusted business partner committed to delivering exceptional services and innovative solutions. 
            Located in the heart of Ho Chi Minh City, we serve businesses with professional excellence and dedication.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000 delay-300">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Your Success is Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Land Hùng Phát, we believe in building long-term partnerships with our clients. 
                Our team of experienced professionals is dedicated to understanding your unique business 
                challenges and providing customized solutions that drive growth and success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With our headquarters strategically located at 65 Hung tế, Q.3 Hồ Chí Minh, we are 
                perfectly positioned to serve businesses throughout the region with prompt and 
                professional service.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-500">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-800">Professional Team</h4>
                    <p className="text-gray-600">Dedicated to Your Success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 200 + 600}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}