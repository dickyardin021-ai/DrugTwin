"use client"

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Welcome to Web Drug Twinn
      </h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
        AI-powered TB therapy monitoring platform integrating patients, nurses, admins, and doctors. 
        Complete clinical data, smart alerts, medication reminders, and real-time alarms.
      </p>
      <div className="grid md:grid-cols-4 gap-8">
        <div className="card p-8 border rounded-lg">
          <h3 className="text-2xl font-bold mb-4">👥 Multi-Role</h3>
          <p>Patient, Nurse, Admin, Doctor dashboards</p>
        </div>
        <div className="card p-8 border rounded-lg">
          <h3 className="text-2xl font-bold mb-4">🧠 AI Alerts</h3>
          <p>Smart processing & risk prediction</p>
        </div>
        <div className="card p-8 border rounded-lg">
          <h3 className="text-2xl font-bold mb-4">💊 Reminders</h3>
          <p>Medication schedules & alarms</p>
        </div>
        <div className="card p-8 border rounded-lg">
          <h3 className="text-2xl font-bold mb-4">⚡ Real-time</h3>
          <p>Live monitoring & notifications</p>
        </div>
      </div>
    </div>
  )
}

