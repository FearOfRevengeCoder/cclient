window.renderVersions = function(versionsJson) {
    const versions = JSON.parse(versionsJson);
    const versionList = document.getElementById('version-list');
    versionList.innerHTML = '';
    versions.forEach(version => {
        const li = document.createElement('li');
        li.innerHTML = `${version} <button class="download-version" data-version="${version}"><i class="fas fa-download"></i></button>`;
        versionList.appendChild(li);
    });

    document.querySelectorAll('.download-version').forEach(button => {
        button.addEventListener('click', event => {
            const versionId = button.getAttribute('data-version');
            downloadVersion(versionId);
        });
    });
};

function downloadVersion(versionId) {
    versionAPI.downloadVersion(versionId, function(success) {
        if (success) {
            showNotification(`Version ${versionId} downloaded successfully.`, 'success');
        } else {
            showNotification(`Failed to download version ${versionId}.`, 'danger');
        }
    });
}

function showNotification(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.setAttribute('role', 'alert');
    alertDiv.textContent = message;

    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.remove();
    }, 5000); // Уведомление будет удалено через 5 секунд
}