import HeroSection from '@/components/hero';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {featuresData, howItWorksData} from '@/data/landing';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='mt-40'>
      <HeroSection />

      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-5xl font-extrabold text-center gradient-title mb-12'>
            Everything you need to manage your finances
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuresData.map((feature, index) => (
              <Card key={index} className={`p-6`}>
                <CardContent className={`space-y-4 pt-4`}>
                  {feature.icon}
                  <h3 className='text-xl font-semibold'>{feature.title}</h3>
                  <p className='text-gray-600'>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-5xl font-extrabold text-center gradient-title mb-16'>
            How it works
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {howItWorksData.map((step, index) => (
              <div key={index} className='text-center'>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  {step.icon}
                </div>
                <h3 className='text-xl font-semibold mb-4'>{step.title}</h3>
                <p className='text-gray-600'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 bg-blue-600'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-5xl font-bold text-white text-center mb-4'>
            Ready to Take control of your Finances ?
          </h2>
          <p className='text-blue-100 mb-8 max-w-2xl mx-auto'>
            Join thousands of users who are already managing their finances
            smarter with Vault X
          </p>
          <Link href='/dashboard'>
            <Button
              size={'lg'}
              className={`bg-white text-blue-600 hover:bg-blue-50 animate-bounce`}
            >
              Start free trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
