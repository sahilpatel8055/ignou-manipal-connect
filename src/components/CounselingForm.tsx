import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Users } from 'lucide-react';

const CounselingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    consent: false
  });

  const courses = [
    'Online MBA',
    'Online MCA', 
    'Online BBA',
    'Online BCA',
    'Online BCom',
    'Online MCom'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-card/95 backdrop-blur-md border border-border rounded-2xl p-4 shadow-lg w-full max-w-sm lg:max-w-sm xl:max-w-md overflow-hidden">{/* Fixed width and added overflow-hidden */}
      <div className="text-center mb-3">
        <h3 className="text-sm font-bold text-foreground mb-1">
          Join <span className="text-primary">50,000+</span> Learners Across India
        </h3>
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
              <Calendar className="w-2 h-2 text-primary" />
            </div>
            Easy financing
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
              <Users className="w-2 h-2 text-primary" />
            </div>
            Scholarships
          </div>
        </div>
        <p className="text-xs text-card-foreground font-medium">
          Submit your details and we'll contact you soon!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2 text-xs">{/* Reduced spacing and smaller text */}
        <div className="flex items-center gap-2">
          <label className="text-xs text-muted-foreground whitespace-nowrap min-w-fit">Name :</label>
          <Input
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-background border-border focus:border-primary text-xs h-8 flex-1"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs text-muted-foreground whitespace-nowrap min-w-fit">Email :</label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-background border-border focus:border-primary text-xs h-8 flex-1"
            required
          />
        </div>

            <div className="flex items-center gap-2">
              <label className="text-xs font-medium text-foreground whitespace-nowrap min-w-fit">Mobile No. :</label>
          <div className="flex flex-1">
            <div className="flex items-center bg-background border border-r-0 border-border rounded-l-md px-2 h-8">
              <span className="text-xs text-muted-foreground">🇮🇳 +91</span>
            </div>
            <Input
              type="tel"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className="bg-background border-border focus:border-primary rounded-l-none text-xs h-8"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs text-muted-foreground whitespace-nowrap min-w-fit">Course :</label>
          <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
            <SelectTrigger className="bg-background border-border focus:border-primary text-xs h-8 flex-1">
              <SelectValue placeholder="Select course*" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course) => (
                <SelectItem key={course} value={course}>
                  {course}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox 
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
            className="mt-0.5 flex-shrink-0"
          />
          <label htmlFor="consent" className="text-xs text-muted-foreground leading-tight">
            I authorize Online Manipal and its associates to contact me with updates notifications via email, SMS, WhatsApp, and voice call. This consent will override any registration for DNC / NDNC.
          </label>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-primary hover:opacity-90 transition-smooth text-xs h-8"
          disabled={!formData.consent}
        >
          Enroll Now
        </Button>
      </form>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          Last Date: <span className="text-primary font-medium">23 Aug</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Users className="w-3 h-3" />
          <span className="text-primary font-medium">Limited Seats</span>
        </div>
      </div>
    </div>
  );
};

export default CounselingForm;