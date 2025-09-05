import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  Users, 
  Headphones, 
  TrendingUp, 
  Shield, 
  Zap,
  ArrowRight 
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      title: 'Business Consulting',
      description: 'Strategic business advice and consulting services to help your company grow and succeed in competitive markets.',
      features: ['Strategic Planning', 'Market Analysis', 'Growth Strategy', 'Risk Assessment'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Professional Services',
      description: 'Comprehensive professional solutions tailored to meet your specific business requirements and objectives.',
      features: ['Project Management', 'Process Optimization', 'Quality Assurance', 'Team Training'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description: '24/7 dedicated customer service and support to ensure your business operations run smoothly at all times.',
      features: ['24/7 Availability', 'Multi-channel Support', 'Quick Response', 'Expert Assistance'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Data-driven strategies and solutions designed to accelerate your business growth and market expansion.',
      features: ['Growth Analytics', 'Market Expansion', 'Performance Metrics', 'ROI Optimization'],
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and assurance processes to ensure the highest standards in all deliverables.',
      features: ['Quality Control', 'Standards Compliance', 'Process Auditing', 'Continuous Improvement'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Innovation Solutions',
      description: 'Cutting-edge innovative solutions and technologies to keep your business ahead of the competition.',
      features: ['Technology Integration', 'Digital Transformation', 'Automation', 'Innovation Strategy'],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Professional Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of professional services designed to help your business 
            thrive and succeed in today's competitive marketplace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge 
                      key={featureIndex} 
                      variant="secondary" 
                      className="mr-2 mb-2 bg-blue-50 text-blue-700 hover:bg-blue-100"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss how we can help your business achieve its goals.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg group"
          >
            Contact Us Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}