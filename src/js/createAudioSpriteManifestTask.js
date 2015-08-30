var project;
(function (project) {
    /*
    *
    * AudioSprite用のSoundManifestをつくるためのタスク
    *
    */
    var CreateAudioSpriteManifestTask = (function () {
        function CreateAudioSpriteManifestTask() {
        }
        CreateAudioSpriteManifestTask.prototype.getSoundManifest = function () {
            var soundManifest = this.createSoundManifest();
            return soundManifest;
        };
        /*
         * Soundファイル用マニフェストを作成する
         * */
        CreateAudioSpriteManifestTask.prototype.createSoundManifest = function () {
            var audioSpriteData = this.prepareSE();
            var manifest = [
                {
                    src: "sounds/150824.ogg",
                    data: {
                        channels: 50,
                        audioSprite: audioSpriteData
                    }
                }
            ];
            return manifest;
        };
        /*
         * SEデータを準備する
         * */
        CreateAudioSpriteManifestTask.prototype.prepareSE = function () {
            var allSEData = [];
            var SE_NUM = 11;
            var SE_STEP = 4000;
            var SE_DURATION = 2600;
            for (var i = 0; i < SE_NUM; i++) {
                var seData = {
                    id: "se_" + i,
                    startTime: SE_STEP * i,
                    duration: SE_DURATION
                };
                allSEData[i] = seData;
            }
            allSEData[SE_NUM] = {
                id: "bgm",
                startTime: SE_STEP * SE_NUM,
                duration: 16 * 1000
            };
            return allSEData;
        };
        return CreateAudioSpriteManifestTask;
    })();
    project.CreateAudioSpriteManifestTask = CreateAudioSpriteManifestTask;
})(project || (project = {}));
//# sourceMappingURL=createAudioSpriteManifestTask.js.map