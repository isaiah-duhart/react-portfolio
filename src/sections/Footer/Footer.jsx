import styles from './FooterStyles.module.css'

function Footer() {
	return (
		<section id='footer' className={styles.container}>
			<p>
				<a
					href='https://logolook.net/spotify-logo/'
					title='Spotify logo reference'
				>
					Spotify logo taken from logolook.next
				</a>
        <br />
				<a href='https://www.vecteezy.com/free-vector/api'>
					Api Vectors by Vecteezy
				</a>
        <br />
				<a href='https://logospng.org/logo-nba/' title='Spotify logo reference'>
					NBA logo taken from logospng.org
				</a>
			</p>
			<p>
				&copy; 2025 Isaiah Duhart. <br />
				All Rights Reserved
			</p>
		</section>
	)
}

export default Footer
