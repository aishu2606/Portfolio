import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";

const HomeLab = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="homelab" />
        <h2>HomeLab</h2>
      </div>

      <div className="writeup space-y-6 text-sm leading-relaxed text-gray-700">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">
            Homelab Server Setup
          </h3>
          <p>
            I built a self-hosted homelab using an old gaming laptop to create a
            compact development and media server environment for local use. The
            goal was to learn infrastructure management, containerized
            deployments, self-hosting, networking, and GPU-enabled workloads
            while reusing existing hardware efficiently.
          </p>
        </div>

        <img
          src="/images/homelab-1.png"
          alt="Homelab setup"
          className="block w-full h-auto rounded-xl object-contain"
        />

        <section className="space-y-3">
          <h4 className="text-base font-semibold text-gray-900">Hardware</h4>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Device:</strong> Lenovo LOQ 15IRH8
            </li>
            <li>
              <strong>CPU:</strong> Intel Core i5-12450H (12 threads, up to 4.4
              GHz)
            </li>
            <li>
              <strong>GPU:</strong> NVIDIA RTX 4060 Mobile + Intel UHD Graphics
            </li>
            <li>
              <strong>RAM:</strong> 16 GB DDR5
            </li>
            <li>
              <strong>Storage:</strong> 100 GB SSD for OS
            </li>
            <li>8 TB external storage for media and backups</li>
            <li>
              <strong>Network:</strong> Connected through a 1 Gbps Ethernet
              switch for stable local streaming and file transfers
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h4 className="text-base font-semibold text-gray-900">
            Software Stack
          </h4>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Operating System:</strong> Ubuntu Server 26.04 LTS
            </li>
            <li>
              <strong>Management Platform:</strong>{" "}
              <a
                href="https://casaos.io?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                CasaOS
              </a>
            </li>
            <li>
              <strong>Container Management:</strong>{" "}
              <a
                href="https://www.portainer.io?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Portainer
              </a>
            </li>
            <li>
              <strong>Remote Networking:</strong>{" "}
              <a
                href="https://tailscale.com?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Tailscale
              </a>
            </li>
          </ul>
        </section>

        <img
          src="/images/Homelab-2.jpeg"
          alt="Homelab media server preview"
          className="block w-full h-auto rounded-xl object-contain"
        />

        <section className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-base font-semibold text-gray-900">
              Services Hosted
            </h4>
            <h5 className="font-medium text-gray-900">Media Server</h5>
            <p>
              Using{" "}
              <a
                href="https://jellyfin.org?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Jellyfin
              </a>{" "}
              for local media streaming across devices. The setup supports
              hardware acceleration using the NVIDIA GPU for efficient
              transcoding and smooth playback.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-medium text-gray-900">Smart Home Automation</h5>
            <p>
              Running{" "}
              <a
                href="https://www.home-assistant.io?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Home Assistant
              </a>{" "}
              to centralize and automate smart home devices, notifications, and
              routines.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-medium text-gray-900">
              Photo & Backup Management
            </h5>
            <p>
              Using{" "}
              <a
                href="https://immich.app?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Immich
              </a>{" "}
              as a self-hosted alternative to cloud photo storage, enabling
              automatic backup, indexing, and browsing of media files.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-medium text-gray-900">Remote Access</h5>
            <p>
              Configured{" "}
              <a
                href="https://tailscale.com?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Tailscale
              </a>{" "}
              for secure remote access to services without exposing ports
              directly to the public internet.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h4 className="text-base font-semibold text-gray-900">
            Key Learnings
          </h4>
          <ul className="list-disc space-y-2 pl-5">
            <li>Linux server administration</li>
            <li>Docker container orchestration</li>
            <li>Reverse proxy and networking concepts</li>
            <li>GPU passthrough and hardware transcoding</li>
            <li>Storage management and backup planning</li>
            <li>Self-hosted infrastructure design</li>
            <li>Secure remote networking with mesh VPNs</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h4 className="text-base font-semibold text-gray-900">
            Why This Project Matters
          </h4>
          <p>
            This homelab became a practical environment for experimenting with
            real-world infrastructure and deployment workflows outside
            traditional cloud environments. It serves as a development sandbox,
            a self-hosted cloud replacement, a media and automation server, and
            a platform for learning DevOps and system administration concepts.
          </p>
          <p>
            The project demonstrates hands-on experience with Linux systems,
            networking, containerization, and self-hosted application ecosystems
            while optimizing consumer hardware for server workloads.
          </p>
        </section>
      </div>
    </>
  );
};

const HomeLabWindow = WindowWrapper(HomeLab, "homelab");

export default HomeLabWindow;
