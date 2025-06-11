# `policyPasswordDefault` Submodule <a name="`policyPasswordDefault` Submodule" id="@cdktf/provider-okta.policyPasswordDefault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyPasswordDefault <a name="PolicyPasswordDefault" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default okta_policy_password_default}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_password_default

policyPasswordDefault.PolicyPasswordDefault(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  call_recovery: str = None,
  email_recovery: str = None,
  id: str = None,
  password_auto_unlock_minutes: typing.Union[int, float] = None,
  password_dictionary_lookup: typing.Union[bool, IResolvable] = None,
  password_exclude_first_name: typing.Union[bool, IResolvable] = None,
  password_exclude_last_name: typing.Union[bool, IResolvable] = None,
  password_exclude_username: typing.Union[bool, IResolvable] = None,
  password_expire_warn_days: typing.Union[int, float] = None,
  password_history_count: typing.Union[int, float] = None,
  password_lockout_notification_channels: typing.List[str] = None,
  password_max_age_days: typing.Union[int, float] = None,
  password_max_lockout_attempts: typing.Union[int, float] = None,
  password_min_age_minutes: typing.Union[int, float] = None,
  password_min_length: typing.Union[int, float] = None,
  password_min_lowercase: typing.Union[int, float] = None,
  password_min_number: typing.Union[int, float] = None,
  password_min_symbol: typing.Union[int, float] = None,
  password_min_uppercase: typing.Union[int, float] = None,
  password_show_lockout_failures: typing.Union[bool, IResolvable] = None,
  question_min_length: typing.Union[int, float] = None,
  question_recovery: str = None,
  recovery_email_token: typing.Union[int, float] = None,
  skip_unlock: typing.Union[bool, IResolvable] = None,
  sms_recovery: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.callRecovery">call_recovery</a></code> | <code>str</code> | Enable or disable voice call recovery: ACTIVE or INACTIVE. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.emailRecovery">email_recovery</a></code> | <code>str</code> | Enable or disable email password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#id PolicyPasswordDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordAutoUnlockMinutes">password_auto_unlock_minutes</a></code> | <code>typing.Union[int, float]</code> | Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordDictionaryLookup">password_dictionary_lookup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Check Passwords Against Common Password Dictionary. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExcludeFirstName">password_exclude_first_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExcludeLastName">password_exclude_last_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExcludeUsername">password_exclude_username</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the user name must be excluded from the password. Default: `true`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExpireWarnDays">password_expire_warn_days</a></code> | <code>typing.Union[int, float]</code> | Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordHistoryCount">password_history_count</a></code> | <code>typing.Union[int, float]</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `4`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordLockoutNotificationChannels">password_lockout_notification_channels</a></code> | <code>typing.List[str]</code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMaxAgeDays">password_max_age_days</a></code> | <code>typing.Union[int, float]</code> | Length in days a password is valid before expiry: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMaxLockoutAttempts">password_max_lockout_attempts</a></code> | <code>typing.Union[int, float]</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinAgeMinutes">password_min_age_minutes</a></code> | <code>typing.Union[int, float]</code> | Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinLength">password_min_length</a></code> | <code>typing.Union[int, float]</code> | Minimum password length. Default is `8`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinLowercase">password_min_lowercase</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinNumber">password_min_number</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default = `1`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinSymbol">password_min_symbol</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinUppercase">password_min_uppercase</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordShowLockoutFailures">password_show_lockout_failures</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If a user should be informed when their account is locked. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.questionMinLength">question_min_length</a></code> | <code>typing.Union[int, float]</code> | Min length of the password recovery question answer. Default: `4`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.questionRecovery">question_recovery</a></code> | <code>str</code> | Enable or disable security question password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.recoveryEmailToken">recovery_email_token</a></code> | <code>typing.Union[int, float]</code> | Lifetime in minutes of the recovery email token. Default: `60`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.skipUnlock">skip_unlock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.smsRecovery">sms_recovery</a></code> | <code>str</code> | Enable or disable SMS password recovery: ACTIVE or INACTIVE. Default: `INACTIVE`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `call_recovery`<sup>Optional</sup> <a name="call_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.callRecovery"></a>

- *Type:* str

Enable or disable voice call recovery: ACTIVE or INACTIVE. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#call_recovery PolicyPasswordDefault#call_recovery}

---

##### `email_recovery`<sup>Optional</sup> <a name="email_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.emailRecovery"></a>

- *Type:* str

Enable or disable email password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#email_recovery PolicyPasswordDefault#email_recovery}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#id PolicyPasswordDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password_auto_unlock_minutes`<sup>Optional</sup> <a name="password_auto_unlock_minutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordAutoUnlockMinutes"></a>

- *Type:* typing.Union[int, float]

Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_auto_unlock_minutes PolicyPasswordDefault#password_auto_unlock_minutes}

---

##### `password_dictionary_lookup`<sup>Optional</sup> <a name="password_dictionary_lookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordDictionaryLookup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Check Passwords Against Common Password Dictionary. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_dictionary_lookup PolicyPasswordDefault#password_dictionary_lookup}

---

##### `password_exclude_first_name`<sup>Optional</sup> <a name="password_exclude_first_name" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExcludeFirstName"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_exclude_first_name PolicyPasswordDefault#password_exclude_first_name}

---

##### `password_exclude_last_name`<sup>Optional</sup> <a name="password_exclude_last_name" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExcludeLastName"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_exclude_last_name PolicyPasswordDefault#password_exclude_last_name}

---

##### `password_exclude_username`<sup>Optional</sup> <a name="password_exclude_username" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExcludeUsername"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the user name must be excluded from the password. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_exclude_username PolicyPasswordDefault#password_exclude_username}

---

##### `password_expire_warn_days`<sup>Optional</sup> <a name="password_expire_warn_days" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExpireWarnDays"></a>

- *Type:* typing.Union[int, float]

Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_expire_warn_days PolicyPasswordDefault#password_expire_warn_days}

---

##### `password_history_count`<sup>Optional</sup> <a name="password_history_count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordHistoryCount"></a>

- *Type:* typing.Union[int, float]

Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_history_count PolicyPasswordDefault#password_history_count}

---

##### `password_lockout_notification_channels`<sup>Optional</sup> <a name="password_lockout_notification_channels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordLockoutNotificationChannels"></a>

- *Type:* typing.List[str]

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_lockout_notification_channels PolicyPasswordDefault#password_lockout_notification_channels}

---

##### `password_max_age_days`<sup>Optional</sup> <a name="password_max_age_days" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMaxAgeDays"></a>

- *Type:* typing.Union[int, float]

Length in days a password is valid before expiry: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_max_age_days PolicyPasswordDefault#password_max_age_days}

---

##### `password_max_lockout_attempts`<sup>Optional</sup> <a name="password_max_lockout_attempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMaxLockoutAttempts"></a>

- *Type:* typing.Union[int, float]

Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_max_lockout_attempts PolicyPasswordDefault#password_max_lockout_attempts}

---

##### `password_min_age_minutes`<sup>Optional</sup> <a name="password_min_age_minutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinAgeMinutes"></a>

- *Type:* typing.Union[int, float]

Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_min_age_minutes PolicyPasswordDefault#password_min_age_minutes}

---

##### `password_min_length`<sup>Optional</sup> <a name="password_min_length" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinLength"></a>

- *Type:* typing.Union[int, float]

Minimum password length. Default is `8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_min_length PolicyPasswordDefault#password_min_length}

---

##### `password_min_lowercase`<sup>Optional</sup> <a name="password_min_lowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinLowercase"></a>

- *Type:* typing.Union[int, float]

If a password must contain at least one lower case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_min_lowercase PolicyPasswordDefault#password_min_lowercase}

---

##### `password_min_number`<sup>Optional</sup> <a name="password_min_number" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinNumber"></a>

- *Type:* typing.Union[int, float]

If a password must contain at least one number: 0 = no, 1 = yes. Default = `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_min_number PolicyPasswordDefault#password_min_number}

---

##### `password_min_symbol`<sup>Optional</sup> <a name="password_min_symbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinSymbol"></a>

- *Type:* typing.Union[int, float]

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_min_symbol PolicyPasswordDefault#password_min_symbol}

---

##### `password_min_uppercase`<sup>Optional</sup> <a name="password_min_uppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinUppercase"></a>

- *Type:* typing.Union[int, float]

If a password must contain at least one upper case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_min_uppercase PolicyPasswordDefault#password_min_uppercase}

---

##### `password_show_lockout_failures`<sup>Optional</sup> <a name="password_show_lockout_failures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordShowLockoutFailures"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If a user should be informed when their account is locked. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_show_lockout_failures PolicyPasswordDefault#password_show_lockout_failures}

---

##### `question_min_length`<sup>Optional</sup> <a name="question_min_length" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.questionMinLength"></a>

- *Type:* typing.Union[int, float]

Min length of the password recovery question answer. Default: `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#question_min_length PolicyPasswordDefault#question_min_length}

---

##### `question_recovery`<sup>Optional</sup> <a name="question_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.questionRecovery"></a>

- *Type:* str

Enable or disable security question password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#question_recovery PolicyPasswordDefault#question_recovery}

---

##### `recovery_email_token`<sup>Optional</sup> <a name="recovery_email_token" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.recoveryEmailToken"></a>

- *Type:* typing.Union[int, float]

Lifetime in minutes of the recovery email token. Default: `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#recovery_email_token PolicyPasswordDefault#recovery_email_token}

---

##### `skip_unlock`<sup>Optional</sup> <a name="skip_unlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.skipUnlock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#skip_unlock PolicyPasswordDefault#skip_unlock}

---

##### `sms_recovery`<sup>Optional</sup> <a name="sms_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.smsRecovery"></a>

- *Type:* str

Enable or disable SMS password recovery: ACTIVE or INACTIVE. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#sms_recovery PolicyPasswordDefault#sms_recovery}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetCallRecovery">reset_call_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetEmailRecovery">reset_email_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordAutoUnlockMinutes">reset_password_auto_unlock_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordDictionaryLookup">reset_password_dictionary_lookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeFirstName">reset_password_exclude_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeLastName">reset_password_exclude_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeUsername">reset_password_exclude_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExpireWarnDays">reset_password_expire_warn_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordHistoryCount">reset_password_history_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordLockoutNotificationChannels">reset_password_lockout_notification_channels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxAgeDays">reset_password_max_age_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxLockoutAttempts">reset_password_max_lockout_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinAgeMinutes">reset_password_min_age_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLength">reset_password_min_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLowercase">reset_password_min_lowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinNumber">reset_password_min_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinSymbol">reset_password_min_symbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinUppercase">reset_password_min_uppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordShowLockoutFailures">reset_password_show_lockout_failures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionMinLength">reset_question_min_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionRecovery">reset_question_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetRecoveryEmailToken">reset_recovery_email_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSkipUnlock">reset_skip_unlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSmsRecovery">reset_sms_recovery</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_call_recovery` <a name="reset_call_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetCallRecovery"></a>

```python
def reset_call_recovery() -> None
```

##### `reset_email_recovery` <a name="reset_email_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetEmailRecovery"></a>

```python
def reset_email_recovery() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password_auto_unlock_minutes` <a name="reset_password_auto_unlock_minutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordAutoUnlockMinutes"></a>

```python
def reset_password_auto_unlock_minutes() -> None
```

##### `reset_password_dictionary_lookup` <a name="reset_password_dictionary_lookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordDictionaryLookup"></a>

```python
def reset_password_dictionary_lookup() -> None
```

##### `reset_password_exclude_first_name` <a name="reset_password_exclude_first_name" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeFirstName"></a>

```python
def reset_password_exclude_first_name() -> None
```

##### `reset_password_exclude_last_name` <a name="reset_password_exclude_last_name" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeLastName"></a>

```python
def reset_password_exclude_last_name() -> None
```

##### `reset_password_exclude_username` <a name="reset_password_exclude_username" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeUsername"></a>

```python
def reset_password_exclude_username() -> None
```

##### `reset_password_expire_warn_days` <a name="reset_password_expire_warn_days" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExpireWarnDays"></a>

```python
def reset_password_expire_warn_days() -> None
```

##### `reset_password_history_count` <a name="reset_password_history_count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordHistoryCount"></a>

```python
def reset_password_history_count() -> None
```

##### `reset_password_lockout_notification_channels` <a name="reset_password_lockout_notification_channels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordLockoutNotificationChannels"></a>

```python
def reset_password_lockout_notification_channels() -> None
```

##### `reset_password_max_age_days` <a name="reset_password_max_age_days" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxAgeDays"></a>

```python
def reset_password_max_age_days() -> None
```

##### `reset_password_max_lockout_attempts` <a name="reset_password_max_lockout_attempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxLockoutAttempts"></a>

```python
def reset_password_max_lockout_attempts() -> None
```

##### `reset_password_min_age_minutes` <a name="reset_password_min_age_minutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinAgeMinutes"></a>

```python
def reset_password_min_age_minutes() -> None
```

##### `reset_password_min_length` <a name="reset_password_min_length" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLength"></a>

```python
def reset_password_min_length() -> None
```

##### `reset_password_min_lowercase` <a name="reset_password_min_lowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLowercase"></a>

```python
def reset_password_min_lowercase() -> None
```

##### `reset_password_min_number` <a name="reset_password_min_number" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinNumber"></a>

```python
def reset_password_min_number() -> None
```

##### `reset_password_min_symbol` <a name="reset_password_min_symbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinSymbol"></a>

```python
def reset_password_min_symbol() -> None
```

##### `reset_password_min_uppercase` <a name="reset_password_min_uppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinUppercase"></a>

```python
def reset_password_min_uppercase() -> None
```

##### `reset_password_show_lockout_failures` <a name="reset_password_show_lockout_failures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordShowLockoutFailures"></a>

```python
def reset_password_show_lockout_failures() -> None
```

##### `reset_question_min_length` <a name="reset_question_min_length" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionMinLength"></a>

```python
def reset_question_min_length() -> None
```

##### `reset_question_recovery` <a name="reset_question_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionRecovery"></a>

```python
def reset_question_recovery() -> None
```

##### `reset_recovery_email_token` <a name="reset_recovery_email_token" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetRecoveryEmailToken"></a>

```python
def reset_recovery_email_token() -> None
```

##### `reset_skip_unlock` <a name="reset_skip_unlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSkipUnlock"></a>

```python
def reset_skip_unlock() -> None
```

##### `reset_sms_recovery` <a name="reset_sms_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSmsRecovery"></a>

```python
def reset_sms_recovery() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PolicyPasswordDefault resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import policy_password_default

policyPasswordDefault.PolicyPasswordDefault.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import policy_password_default

policyPasswordDefault.PolicyPasswordDefault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import policy_password_default

policyPasswordDefault.PolicyPasswordDefault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import policy_password_default

policyPasswordDefault.PolicyPasswordDefault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PolicyPasswordDefault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PolicyPasswordDefault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PolicyPasswordDefault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyPasswordDefault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultAuthProvider">default_auth_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultIncludedGroupId">default_included_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecoveryInput">call_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecoveryInput">email_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutesInput">password_auto_unlock_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookupInput">password_dictionary_lookup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstNameInput">password_exclude_first_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastNameInput">password_exclude_last_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsernameInput">password_exclude_username_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDaysInput">password_expire_warn_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCountInput">password_history_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannelsInput">password_lockout_notification_channels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDaysInput">password_max_age_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttemptsInput">password_max_lockout_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutesInput">password_min_age_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLengthInput">password_min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercaseInput">password_min_lowercase_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumberInput">password_min_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbolInput">password_min_symbol_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercaseInput">password_min_uppercase_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailuresInput">password_show_lockout_failures_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLengthInput">question_min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecoveryInput">question_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailTokenInput">recovery_email_token_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlockInput">skip_unlock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecoveryInput">sms_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecovery">call_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecovery">email_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutes">password_auto_unlock_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookup">password_dictionary_lookup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstName">password_exclude_first_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastName">password_exclude_last_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsername">password_exclude_username</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDays">password_expire_warn_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCount">password_history_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannels">password_lockout_notification_channels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDays">password_max_age_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttempts">password_max_lockout_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutes">password_min_age_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLength">password_min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercase">password_min_lowercase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumber">password_min_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbol">password_min_symbol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercase">password_min_uppercase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailures">password_show_lockout_failures</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLength">question_min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecovery">question_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailToken">recovery_email_token</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlock">skip_unlock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecovery">sms_recovery</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_auth_provider`<sup>Required</sup> <a name="default_auth_provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultAuthProvider"></a>

```python
default_auth_provider: str
```

- *Type:* str

---

##### `default_included_group_id`<sup>Required</sup> <a name="default_included_group_id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultIncludedGroupId"></a>

```python
default_included_group_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `call_recovery_input`<sup>Optional</sup> <a name="call_recovery_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecoveryInput"></a>

```python
call_recovery_input: str
```

- *Type:* str

---

##### `email_recovery_input`<sup>Optional</sup> <a name="email_recovery_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecoveryInput"></a>

```python
email_recovery_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `password_auto_unlock_minutes_input`<sup>Optional</sup> <a name="password_auto_unlock_minutes_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutesInput"></a>

```python
password_auto_unlock_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_dictionary_lookup_input`<sup>Optional</sup> <a name="password_dictionary_lookup_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookupInput"></a>

```python
password_dictionary_lookup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_first_name_input`<sup>Optional</sup> <a name="password_exclude_first_name_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstNameInput"></a>

```python
password_exclude_first_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_last_name_input`<sup>Optional</sup> <a name="password_exclude_last_name_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastNameInput"></a>

```python
password_exclude_last_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_username_input`<sup>Optional</sup> <a name="password_exclude_username_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsernameInput"></a>

```python
password_exclude_username_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_expire_warn_days_input`<sup>Optional</sup> <a name="password_expire_warn_days_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDaysInput"></a>

```python
password_expire_warn_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_history_count_input`<sup>Optional</sup> <a name="password_history_count_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCountInput"></a>

```python
password_history_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_lockout_notification_channels_input`<sup>Optional</sup> <a name="password_lockout_notification_channels_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannelsInput"></a>

```python
password_lockout_notification_channels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_max_age_days_input`<sup>Optional</sup> <a name="password_max_age_days_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDaysInput"></a>

```python
password_max_age_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_max_lockout_attempts_input`<sup>Optional</sup> <a name="password_max_lockout_attempts_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttemptsInput"></a>

```python
password_max_lockout_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_age_minutes_input`<sup>Optional</sup> <a name="password_min_age_minutes_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutesInput"></a>

```python
password_min_age_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_length_input`<sup>Optional</sup> <a name="password_min_length_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLengthInput"></a>

```python
password_min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_lowercase_input`<sup>Optional</sup> <a name="password_min_lowercase_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercaseInput"></a>

```python
password_min_lowercase_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_number_input`<sup>Optional</sup> <a name="password_min_number_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumberInput"></a>

```python
password_min_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_symbol_input`<sup>Optional</sup> <a name="password_min_symbol_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbolInput"></a>

```python
password_min_symbol_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_uppercase_input`<sup>Optional</sup> <a name="password_min_uppercase_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercaseInput"></a>

```python
password_min_uppercase_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_show_lockout_failures_input`<sup>Optional</sup> <a name="password_show_lockout_failures_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailuresInput"></a>

```python
password_show_lockout_failures_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `question_min_length_input`<sup>Optional</sup> <a name="question_min_length_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLengthInput"></a>

```python
question_min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `question_recovery_input`<sup>Optional</sup> <a name="question_recovery_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecoveryInput"></a>

```python
question_recovery_input: str
```

- *Type:* str

---

##### `recovery_email_token_input`<sup>Optional</sup> <a name="recovery_email_token_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailTokenInput"></a>

```python
recovery_email_token_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_unlock_input`<sup>Optional</sup> <a name="skip_unlock_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlockInput"></a>

```python
skip_unlock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sms_recovery_input`<sup>Optional</sup> <a name="sms_recovery_input" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecoveryInput"></a>

```python
sms_recovery_input: str
```

- *Type:* str

---

##### `call_recovery`<sup>Required</sup> <a name="call_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecovery"></a>

```python
call_recovery: str
```

- *Type:* str

---

##### `email_recovery`<sup>Required</sup> <a name="email_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecovery"></a>

```python
email_recovery: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password_auto_unlock_minutes`<sup>Required</sup> <a name="password_auto_unlock_minutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutes"></a>

```python
password_auto_unlock_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_dictionary_lookup`<sup>Required</sup> <a name="password_dictionary_lookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookup"></a>

```python
password_dictionary_lookup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_first_name`<sup>Required</sup> <a name="password_exclude_first_name" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstName"></a>

```python
password_exclude_first_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_last_name`<sup>Required</sup> <a name="password_exclude_last_name" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastName"></a>

```python
password_exclude_last_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_username`<sup>Required</sup> <a name="password_exclude_username" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsername"></a>

```python
password_exclude_username: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_expire_warn_days`<sup>Required</sup> <a name="password_expire_warn_days" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDays"></a>

```python
password_expire_warn_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_history_count`<sup>Required</sup> <a name="password_history_count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCount"></a>

```python
password_history_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_lockout_notification_channels`<sup>Required</sup> <a name="password_lockout_notification_channels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannels"></a>

```python
password_lockout_notification_channels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_max_age_days`<sup>Required</sup> <a name="password_max_age_days" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDays"></a>

```python
password_max_age_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_max_lockout_attempts`<sup>Required</sup> <a name="password_max_lockout_attempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttempts"></a>

```python
password_max_lockout_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_age_minutes`<sup>Required</sup> <a name="password_min_age_minutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutes"></a>

```python
password_min_age_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_length`<sup>Required</sup> <a name="password_min_length" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLength"></a>

```python
password_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_lowercase`<sup>Required</sup> <a name="password_min_lowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercase"></a>

```python
password_min_lowercase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_number`<sup>Required</sup> <a name="password_min_number" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumber"></a>

```python
password_min_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_symbol`<sup>Required</sup> <a name="password_min_symbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbol"></a>

```python
password_min_symbol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_uppercase`<sup>Required</sup> <a name="password_min_uppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercase"></a>

```python
password_min_uppercase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_show_lockout_failures`<sup>Required</sup> <a name="password_show_lockout_failures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailures"></a>

```python
password_show_lockout_failures: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `question_min_length`<sup>Required</sup> <a name="question_min_length" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLength"></a>

```python
question_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `question_recovery`<sup>Required</sup> <a name="question_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecovery"></a>

```python
question_recovery: str
```

- *Type:* str

---

##### `recovery_email_token`<sup>Required</sup> <a name="recovery_email_token" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailToken"></a>

```python
recovery_email_token: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_unlock`<sup>Required</sup> <a name="skip_unlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlock"></a>

```python
skip_unlock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sms_recovery`<sup>Required</sup> <a name="sms_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecovery"></a>

```python
sms_recovery: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyPasswordDefaultConfig <a name="PolicyPasswordDefaultConfig" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_password_default

policyPasswordDefault.PolicyPasswordDefaultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  call_recovery: str = None,
  email_recovery: str = None,
  id: str = None,
  password_auto_unlock_minutes: typing.Union[int, float] = None,
  password_dictionary_lookup: typing.Union[bool, IResolvable] = None,
  password_exclude_first_name: typing.Union[bool, IResolvable] = None,
  password_exclude_last_name: typing.Union[bool, IResolvable] = None,
  password_exclude_username: typing.Union[bool, IResolvable] = None,
  password_expire_warn_days: typing.Union[int, float] = None,
  password_history_count: typing.Union[int, float] = None,
  password_lockout_notification_channels: typing.List[str] = None,
  password_max_age_days: typing.Union[int, float] = None,
  password_max_lockout_attempts: typing.Union[int, float] = None,
  password_min_age_minutes: typing.Union[int, float] = None,
  password_min_length: typing.Union[int, float] = None,
  password_min_lowercase: typing.Union[int, float] = None,
  password_min_number: typing.Union[int, float] = None,
  password_min_symbol: typing.Union[int, float] = None,
  password_min_uppercase: typing.Union[int, float] = None,
  password_show_lockout_failures: typing.Union[bool, IResolvable] = None,
  question_min_length: typing.Union[int, float] = None,
  question_recovery: str = None,
  recovery_email_token: typing.Union[int, float] = None,
  skip_unlock: typing.Union[bool, IResolvable] = None,
  sms_recovery: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.callRecovery">call_recovery</a></code> | <code>str</code> | Enable or disable voice call recovery: ACTIVE or INACTIVE. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.emailRecovery">email_recovery</a></code> | <code>str</code> | Enable or disable email password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#id PolicyPasswordDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordAutoUnlockMinutes">password_auto_unlock_minutes</a></code> | <code>typing.Union[int, float]</code> | Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordDictionaryLookup">password_dictionary_lookup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Check Passwords Against Common Password Dictionary. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeFirstName">password_exclude_first_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeLastName">password_exclude_last_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeUsername">password_exclude_username</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the user name must be excluded from the password. Default: `true`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExpireWarnDays">password_expire_warn_days</a></code> | <code>typing.Union[int, float]</code> | Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordHistoryCount">password_history_count</a></code> | <code>typing.Union[int, float]</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `4`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordLockoutNotificationChannels">password_lockout_notification_channels</a></code> | <code>typing.List[str]</code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxAgeDays">password_max_age_days</a></code> | <code>typing.Union[int, float]</code> | Length in days a password is valid before expiry: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxLockoutAttempts">password_max_lockout_attempts</a></code> | <code>typing.Union[int, float]</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinAgeMinutes">password_min_age_minutes</a></code> | <code>typing.Union[int, float]</code> | Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLength">password_min_length</a></code> | <code>typing.Union[int, float]</code> | Minimum password length. Default is `8`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLowercase">password_min_lowercase</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinNumber">password_min_number</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default = `1`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinSymbol">password_min_symbol</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinUppercase">password_min_uppercase</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordShowLockoutFailures">password_show_lockout_failures</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If a user should be informed when their account is locked. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionMinLength">question_min_length</a></code> | <code>typing.Union[int, float]</code> | Min length of the password recovery question answer. Default: `4`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionRecovery">question_recovery</a></code> | <code>str</code> | Enable or disable security question password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.recoveryEmailToken">recovery_email_token</a></code> | <code>typing.Union[int, float]</code> | Lifetime in minutes of the recovery email token. Default: `60`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.skipUnlock">skip_unlock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.smsRecovery">sms_recovery</a></code> | <code>str</code> | Enable or disable SMS password recovery: ACTIVE or INACTIVE. Default: `INACTIVE`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `call_recovery`<sup>Optional</sup> <a name="call_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.callRecovery"></a>

```python
call_recovery: str
```

- *Type:* str

Enable or disable voice call recovery: ACTIVE or INACTIVE. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#call_recovery PolicyPasswordDefault#call_recovery}

---

##### `email_recovery`<sup>Optional</sup> <a name="email_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.emailRecovery"></a>

```python
email_recovery: str
```

- *Type:* str

Enable or disable email password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#email_recovery PolicyPasswordDefault#email_recovery}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#id PolicyPasswordDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password_auto_unlock_minutes`<sup>Optional</sup> <a name="password_auto_unlock_minutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordAutoUnlockMinutes"></a>

```python
password_auto_unlock_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_auto_unlock_minutes PolicyPasswordDefault#password_auto_unlock_minutes}

---

##### `password_dictionary_lookup`<sup>Optional</sup> <a name="password_dictionary_lookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordDictionaryLookup"></a>

```python
password_dictionary_lookup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Check Passwords Against Common Password Dictionary. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_dictionary_lookup PolicyPasswordDefault#password_dictionary_lookup}

---

##### `password_exclude_first_name`<sup>Optional</sup> <a name="password_exclude_first_name" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeFirstName"></a>

```python
password_exclude_first_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_exclude_first_name PolicyPasswordDefault#password_exclude_first_name}

---

##### `password_exclude_last_name`<sup>Optional</sup> <a name="password_exclude_last_name" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeLastName"></a>

```python
password_exclude_last_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_exclude_last_name PolicyPasswordDefault#password_exclude_last_name}

---

##### `password_exclude_username`<sup>Optional</sup> <a name="password_exclude_username" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeUsername"></a>

```python
password_exclude_username: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the user name must be excluded from the password. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_exclude_username PolicyPasswordDefault#password_exclude_username}

---

##### `password_expire_warn_days`<sup>Optional</sup> <a name="password_expire_warn_days" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExpireWarnDays"></a>

```python
password_expire_warn_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_expire_warn_days PolicyPasswordDefault#password_expire_warn_days}

---

##### `password_history_count`<sup>Optional</sup> <a name="password_history_count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordHistoryCount"></a>

```python
password_history_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_history_count PolicyPasswordDefault#password_history_count}

---

##### `password_lockout_notification_channels`<sup>Optional</sup> <a name="password_lockout_notification_channels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordLockoutNotificationChannels"></a>

```python
password_lockout_notification_channels: typing.List[str]
```

- *Type:* typing.List[str]

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_lockout_notification_channels PolicyPasswordDefault#password_lockout_notification_channels}

---

##### `password_max_age_days`<sup>Optional</sup> <a name="password_max_age_days" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxAgeDays"></a>

```python
password_max_age_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length in days a password is valid before expiry: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_max_age_days PolicyPasswordDefault#password_max_age_days}

---

##### `password_max_lockout_attempts`<sup>Optional</sup> <a name="password_max_lockout_attempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxLockoutAttempts"></a>

```python
password_max_lockout_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_max_lockout_attempts PolicyPasswordDefault#password_max_lockout_attempts}

---

##### `password_min_age_minutes`<sup>Optional</sup> <a name="password_min_age_minutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinAgeMinutes"></a>

```python
password_min_age_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_min_age_minutes PolicyPasswordDefault#password_min_age_minutes}

---

##### `password_min_length`<sup>Optional</sup> <a name="password_min_length" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLength"></a>

```python
password_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum password length. Default is `8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_min_length PolicyPasswordDefault#password_min_length}

---

##### `password_min_lowercase`<sup>Optional</sup> <a name="password_min_lowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLowercase"></a>

```python
password_min_lowercase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a password must contain at least one lower case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_min_lowercase PolicyPasswordDefault#password_min_lowercase}

---

##### `password_min_number`<sup>Optional</sup> <a name="password_min_number" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinNumber"></a>

```python
password_min_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a password must contain at least one number: 0 = no, 1 = yes. Default = `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_min_number PolicyPasswordDefault#password_min_number}

---

##### `password_min_symbol`<sup>Optional</sup> <a name="password_min_symbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinSymbol"></a>

```python
password_min_symbol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_min_symbol PolicyPasswordDefault#password_min_symbol}

---

##### `password_min_uppercase`<sup>Optional</sup> <a name="password_min_uppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinUppercase"></a>

```python
password_min_uppercase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a password must contain at least one upper case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_min_uppercase PolicyPasswordDefault#password_min_uppercase}

---

##### `password_show_lockout_failures`<sup>Optional</sup> <a name="password_show_lockout_failures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordShowLockoutFailures"></a>

```python
password_show_lockout_failures: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If a user should be informed when their account is locked. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#password_show_lockout_failures PolicyPasswordDefault#password_show_lockout_failures}

---

##### `question_min_length`<sup>Optional</sup> <a name="question_min_length" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionMinLength"></a>

```python
question_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Min length of the password recovery question answer. Default: `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#question_min_length PolicyPasswordDefault#question_min_length}

---

##### `question_recovery`<sup>Optional</sup> <a name="question_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionRecovery"></a>

```python
question_recovery: str
```

- *Type:* str

Enable or disable security question password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#question_recovery PolicyPasswordDefault#question_recovery}

---

##### `recovery_email_token`<sup>Optional</sup> <a name="recovery_email_token" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.recoveryEmailToken"></a>

```python
recovery_email_token: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lifetime in minutes of the recovery email token. Default: `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#recovery_email_token PolicyPasswordDefault#recovery_email_token}

---

##### `skip_unlock`<sup>Optional</sup> <a name="skip_unlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.skipUnlock"></a>

```python
skip_unlock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#skip_unlock PolicyPasswordDefault#skip_unlock}

---

##### `sms_recovery`<sup>Optional</sup> <a name="sms_recovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.smsRecovery"></a>

```python
sms_recovery: str
```

- *Type:* str

Enable or disable SMS password recovery: ACTIVE or INACTIVE. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_password_default#sms_recovery PolicyPasswordDefault#sms_recovery}

---



