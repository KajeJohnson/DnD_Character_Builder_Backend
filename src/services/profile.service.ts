import { profileModel } from "../models/profile.models";
import { Profile } from "../types/profile.types";

async function getProfiles() {
  const profiles = await profileModel.find().lean();
  return profiles;
}

async function getUserProfiles(userId: string) {
  const profiles = await profileModel
    .find({ userId })
    .sort({ createdAt: "desc" })
    .lean();
  return profiles;
}

async function getProfile(id: string) {
  const profile = await profileModel.findById(id).lean();
  return profile;
}

async function getProfileByUsername(profileUsername: string) {
  const profile = await profileModel.findOne({ profileUsername }).lean();
  return profile;
}

async function addProfile(data: Partial<Profile>) {
  const newProfile = await profileModel.create(data);
  return newProfile;
}

async function updateProfile(id: string, data: Partial<Profile>) {
  const updatedProfile = await profileModel
    .findByIdAndUpdate(id, data, {
      new: true,
    })
    .lean();
  return updatedProfile;
}

async function deleteProfile(id: string) {
  return await profileModel.findByIdAndDelete(id);
}

export const profileService = {
  getProfiles,
  getUserProfiles,
  getProfileByUsername,
  getProfile,
  addProfile,
  updateProfile,
  deleteProfile,
};
