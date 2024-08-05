// Cron Service

class CronService {
  constructor() {
    this.activeCronJobs = [];
    this.inActiveCronJobs = [];
  }

  // Obtener el index del Cron Job
  indexOfCronJob(array, title) {
    return array.findIndex((cronjob) => cronjob.title === title);
  }

  // Obtener el Cron Job por title
  getCronJob(title) {
    const foundIncative = this.inActiveCronJobs.findIndex(
      (cronjob) => cronjob.title === title
    );
    if (foundIncative !== -1) {
      // console.log("ACA inActiveCronJobs", this.inActiveCronJobs);
      return this.inActiveCronJobs[foundIncative];
    }
    const foundActive = this.activeCronJobs.findIndex(
      (cronjob) => cronjob.title === title
    );
    if (foundActive !== -1) {
      // console.log("ACA activeCronJobs", this.activeCronJobs);
      return this.activeCronJobs[foundActive];
    }
  }

  // Guardar CronJob
  cronJobSave(title, cronjob) {
    this.activeCronJobs.push({
      title: title,
      state: true,
      cronjob: cronjob,
    });
  }

  // Obtener el nombre de los Cron Jobs
  getCronJobs() {
    // console.log("AQUI!");
    // console.log([...this.inActiveCronJobs, ...this.activeCronJobs]);
    return [...this.inActiveCronJobs, ...this.activeCronJobs];
  }

  // Función para activar o desactivar un cronJob
  toggleCronJob(title, bool) {
    if (bool) {
      const index = this.indexOfCronJob(this.inActiveCronJobs, title);
      if (index !== -1) {
        const job = this.inActiveCronJobs[index];
        job.cronjob.start();
        job.state = bool;
        this.activeCronJobs.push(job);
        this.inActiveCronJobs.splice(index, 1);
        return true;
      }
    } else {
      const index = this.indexOfCronJob(this.activeCronJobs, title);
      if (index !== -1) {
        const job = this.activeCronJobs[index];
        job.cronjob.stop();
        job.state = bool;
        this.inActiveCronJobs.push(job);
        this.activeCronJobs.splice(index, 1);
        return true;
      }
    }
    return false;
  }

  // Función para detener todos los cronJobs activos
  stopAllCronJobs() {
    this.activeCronJobs.forEach((cronjob) => {
      cronjob.state = false;
      cronjob.cronjob.stop();
      this.inActiveCronJobs.push(cronjob);
    });
    this.activeCronJobs = [];
  }

  // Función para comenzar todos los cronJobs inactivos
  startAllCronJobs() {
    this.inActiveCronJobs.forEach((cronjob) => {
      cronjob.state = true;
      cronjob.cronjob.start();
      this.activeCronJobs.push(cronjob);
    });
    this.inActiveCronJobs = [];
  }
}

const cronJobsServices = new CronService();

module.exports = cronJobsServices;
