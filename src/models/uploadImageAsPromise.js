import { storage, ref, uploadBytesResumable, getDownloadURL } from '../firebase';

const uploadImageAsPromise = (image, service, projectName) => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `${service}/${projectName}/${image.name}`)  // photography/project1/image
        const uploadTask = uploadBytesResumable(storageRef, image)                  // photography/project1/innerGallery/image
        uploadTask.on('state_changed',
            (snapshot) => { },
            error => reject(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(downloadURL => resolve(downloadURL))
            }
        )
    })
}

export default uploadImageAsPromise