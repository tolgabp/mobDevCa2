import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from "@capacitor/camera";
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  public photos: UserPhoto[] = []; // Array to store user photos
  private photo_storage = 'photos'; // Storage identifier for photos
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform; // Initializing the platform
  }


// Converts a photo to base64 format
  private async convertBase64(photo: Photo) {
    if (photo.webPath) {
      const res = await fetch(photo.webPath);
      const blob = await res.blob();

      return await this.convertBlobTo64(blob) as string;
    }
    return null;
  }

  // Converts a blob to base64 format
  private convertBlobTo64(blob: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      }
      reader.readAsDataURL(blob);
    })
  }

 // Saves the photo to the device
  private async saveToDevice(photo: Photo) {

    const base64data = await this.convertBase64(photo);
    if (base64data) {
      const filename = `Picture taken at ${new Date().getTime()}.jpeg`;
      const savedFile = await Filesystem.writeFile({
        path: filename,
        data: base64data,
        directory: Directory.Data
      })
      console.log(filename);
      console.log(savedFile);

      return {
        filepath: filename,
        webviewPath: photo.webPath,
        isFavourite: false
      }
    }
    else {
      return null;
    }
  }

  // Takes a photo using the device's camera
  async takePhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })
    this.photos.unshift({
      filepath: 'tbd',
      webviewPath: photo.webPath,
      isFavourite: false

    })
    console.log(this.photos.length);
    this.saveToDevice(photo);
  }


}

// Interface representing a user photo
export interface UserPhoto {
  isFavourite: boolean;
  filepath: string;
  webviewPath?: string;
  description?: string; 
  location?: string; 
}