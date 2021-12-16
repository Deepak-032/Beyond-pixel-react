import { storage, ref, uploadBytesResumable, getDownloadURL } from '../firebase';

const uploadImageAsPromise = (image, collectionName, documentName) => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `${collectionName}/${documentName}/${image.name}`)
        const uploadTask = uploadBytesResumable(storageRef, image)
        uploadTask.on('state_changed',
            (snapshot) => { },
            error => reject(error),
            () => getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => resolve(downloadURL))
        )
    })
}

export default uploadImageAsPromise