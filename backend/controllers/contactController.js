// Contact Controller for Healthcare Platform

export const submitContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, organization, message } = req.body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        required: ['firstName', 'lastName', 'email', 'message']
      });
    }
    
    // Simulate contact form submission
    const contactSubmission = {
      submissionId: `CONTACT_${Date.now()}`,
      timestamp: new Date().toISOString(),
      contact: {
        name: `${firstName} ${lastName}`,
        email,
        organization: organization || 'Not specified',
        message
      },
      status: 'received',
      expectedResponse: '24-48 hours',
      assignedTo: 'healthcare-team@axiom.ai'
    };
    
    // Simulate email notification (would integrate with actual email service)
    const emailNotification = {
      to: email,
      subject: 'Thank you for contacting Axiom Healthcare AI',
      template: 'contact_confirmation',
      variables: {
        firstName,
        submissionId: contactSubmission.submissionId
      }
    };
    
    res.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        submission: contactSubmission,
        confirmation: 'A confirmation email has been sent to your email address'
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Contact form submission failed',
      details: error.message
    });
  }
};

export const getDemoAccess = async (req, res) => {
  try {
    const { email, organization, useCase, numberOfUsers } = req.body;
    
    // Validate required fields
    if (!email || !organization) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        required: ['email', 'organization']
      });
    }
    
    // Simulate demo access provision
    const demoAccess = {
      demoId: `DEMO_${Date.now()}`,
      requestTime: new Date().toISOString(),
      organization,
      contact: email,
      accessDetails: {
        demoUrl: `https://demo.axiom.ai/access/${Date.now()}`,
        username: `demo_${organization.toLowerCase().replace(/\s+/g, '_')}`,
        tempPassword: generateTempPassword(),
        expiresAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days
        features: [
          'AI Diagnostics Platform',
          'Lab Result Analysis',
          'Predictive Analytics',
          'Sample Dataset Access',
          'Basic Reporting'
        ]
      },
      limitations: {
        maxUploads: numberOfUsers ? numberOfUsers * 10 : 50,
        maxUsers: numberOfUsers || 5,
        dataRetention: '14 days',
        supportLevel: 'email'
      },
      nextSteps: [
        'Check your email for demo credentials',
        'Schedule onboarding call',
        'Explore sample datasets',
        'Contact sales for full version'
      ]
    };
    
    res.json({
      success: true,
      message: 'Demo access granted successfully',
      data: demoAccess
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Demo access request failed',
      details: error.message
    });
  }
};

// Helper function to generate temporary password
function generateTempPassword() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}