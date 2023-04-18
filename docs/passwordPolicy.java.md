# `okta_password_policy`

Refer to the Terraform Registory for docs: [`okta_password_policy`](https://www.terraform.io/docs/providers/okta/r/password_policy).

# `passwordPolicy` Submodule <a name="`passwordPolicy` Submodule" id="@cdktf/provider-okta.passwordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PasswordPolicy <a name="PasswordPolicy" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/password_policy okta_password_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.password_policy.PasswordPolicy;

PasswordPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .authProvider(java.lang.String)
//  .callRecovery(java.lang.String)
//  .description(java.lang.String)
//  .emailRecovery(java.lang.String)
//  .groupsIncluded(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .passwordAutoUnlockMinutes(java.lang.Number)
//  .passwordDictionaryLookup(java.lang.Boolean)
//  .passwordDictionaryLookup(IResolvable)
//  .passwordExcludeFirstName(java.lang.Boolean)
//  .passwordExcludeFirstName(IResolvable)
//  .passwordExcludeLastName(java.lang.Boolean)
//  .passwordExcludeLastName(IResolvable)
//  .passwordExcludeUsername(java.lang.Boolean)
//  .passwordExcludeUsername(IResolvable)
//  .passwordExpireWarnDays(java.lang.Number)
//  .passwordHistoryCount(java.lang.Number)
//  .passwordLockoutNotificationChannels(java.util.List<java.lang.String>)
//  .passwordMaxAgeDays(java.lang.Number)
//  .passwordMaxLockoutAttempts(java.lang.Number)
//  .passwordMinAgeMinutes(java.lang.Number)
//  .passwordMinLength(java.lang.Number)
//  .passwordMinLowercase(java.lang.Number)
//  .passwordMinNumber(java.lang.Number)
//  .passwordMinSymbol(java.lang.Number)
//  .passwordMinUppercase(java.lang.Number)
//  .passwordShowLockoutFailures(java.lang.Boolean)
//  .passwordShowLockoutFailures(IResolvable)
//  .priority(java.lang.Number)
//  .questionMinLength(java.lang.Number)
//  .questionRecovery(java.lang.String)
//  .recoveryEmailToken(java.lang.Number)
//  .skipUnlock(java.lang.Boolean)
//  .skipUnlock(IResolvable)
//  .smsRecovery(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.authProvider">authProvider</a></code> | <code>java.lang.String</code> | Authentication Provider: OKTA, ACTIVE_DIRECTORY or LDAP. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.callRecovery">callRecovery</a></code> | <code>java.lang.String</code> | Enable or disable voice call recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.emailRecovery">emailRecovery</a></code> | <code>java.lang.String</code> | Enable or disable email password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordAutoUnlockMinutes">passwordAutoUnlockMinutes</a></code> | <code>java.lang.Number</code> | Number of minutes before a locked account is unlocked: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordDictionaryLookup">passwordDictionaryLookup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Check Passwords Against Common Password Dictionary. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExcludeFirstName">passwordExcludeFirstName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExcludeLastName">passwordExcludeLastName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExcludeUsername">passwordExcludeUsername</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the user name must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExpireWarnDays">passwordExpireWarnDays</a></code> | <code>java.lang.Number</code> | Length in days a user will be warned before password expiry: 0 = no warning. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordHistoryCount">passwordHistoryCount</a></code> | <code>java.lang.Number</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordLockoutNotificationChannels">passwordLockoutNotificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>java.lang.Number</code> | Length in days a password is valid before expiry: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMaxLockoutAttempts">passwordMaxLockoutAttempts</a></code> | <code>java.lang.Number</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinAgeMinutes">passwordMinAgeMinutes</a></code> | <code>java.lang.Number</code> | Minimum time interval in minutes between password changes: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinLength">passwordMinLength</a></code> | <code>java.lang.Number</code> | Minimum password length. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinLowercase">passwordMinLowercase</a></code> | <code>java.lang.Number</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinNumber">passwordMinNumber</a></code> | <code>java.lang.Number</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinSymbol">passwordMinSymbol</a></code> | <code>java.lang.Number</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinUppercase">passwordMinUppercase</a></code> | <code>java.lang.Number</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordShowLockoutFailures">passwordShowLockoutFailures</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If a user should be informed when their account is locked. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.questionMinLength">questionMinLength</a></code> | <code>java.lang.Number</code> | Min length of the password recovery question answer. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.questionRecovery">questionRecovery</a></code> | <code>java.lang.String</code> | Enable or disable security question password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.recoveryEmailToken">recoveryEmailToken</a></code> | <code>java.lang.Number</code> | Lifetime in minutes of the recovery email token. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.skipUnlock">skipUnlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.smsRecovery">smsRecovery</a></code> | <code>java.lang.String</code> | Enable or disable SMS password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Policy Status: ACTIVE or INACTIVE. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Policy Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#name PasswordPolicy#name}

---

##### `authProvider`<sup>Optional</sup> <a name="authProvider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.authProvider"></a>

- *Type:* java.lang.String

Authentication Provider: OKTA, ACTIVE_DIRECTORY or LDAP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#auth_provider PasswordPolicy#auth_provider}

---

##### `callRecovery`<sup>Optional</sup> <a name="callRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.callRecovery"></a>

- *Type:* java.lang.String

Enable or disable voice call recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#call_recovery PasswordPolicy#call_recovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Policy Description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#description PasswordPolicy#description}

---

##### `emailRecovery`<sup>Optional</sup> <a name="emailRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.emailRecovery"></a>

- *Type:* java.lang.String

Enable or disable email password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#email_recovery PasswordPolicy#email_recovery}

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.groupsIncluded"></a>

- *Type:* java.util.List<java.lang.String>

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#groups_included PasswordPolicy#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passwordAutoUnlockMinutes`<sup>Optional</sup> <a name="passwordAutoUnlockMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordAutoUnlockMinutes"></a>

- *Type:* java.lang.Number

Number of minutes before a locked account is unlocked: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_auto_unlock_minutes PasswordPolicy#password_auto_unlock_minutes}

---

##### `passwordDictionaryLookup`<sup>Optional</sup> <a name="passwordDictionaryLookup" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordDictionaryLookup"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Check Passwords Against Common Password Dictionary.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_dictionary_lookup PasswordPolicy#password_dictionary_lookup}

---

##### `passwordExcludeFirstName`<sup>Optional</sup> <a name="passwordExcludeFirstName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExcludeFirstName"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_first_name PasswordPolicy#password_exclude_first_name}

---

##### `passwordExcludeLastName`<sup>Optional</sup> <a name="passwordExcludeLastName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExcludeLastName"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_last_name PasswordPolicy#password_exclude_last_name}

---

##### `passwordExcludeUsername`<sup>Optional</sup> <a name="passwordExcludeUsername" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExcludeUsername"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the user name must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_username PasswordPolicy#password_exclude_username}

---

##### `passwordExpireWarnDays`<sup>Optional</sup> <a name="passwordExpireWarnDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExpireWarnDays"></a>

- *Type:* java.lang.Number

Length in days a user will be warned before password expiry: 0 = no warning.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_expire_warn_days PasswordPolicy#password_expire_warn_days}

---

##### `passwordHistoryCount`<sup>Optional</sup> <a name="passwordHistoryCount" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordHistoryCount"></a>

- *Type:* java.lang.Number

Number of distinct passwords that must be created before they can be reused: 0 = none.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_history_count PasswordPolicy#password_history_count}

---

##### `passwordLockoutNotificationChannels`<sup>Optional</sup> <a name="passwordLockoutNotificationChannels" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordLockoutNotificationChannels"></a>

- *Type:* java.util.List<java.lang.String>

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_lockout_notification_channels PasswordPolicy#password_lockout_notification_channels}

---

##### `passwordMaxAgeDays`<sup>Optional</sup> <a name="passwordMaxAgeDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMaxAgeDays"></a>

- *Type:* java.lang.Number

Length in days a password is valid before expiry: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_max_age_days PasswordPolicy#password_max_age_days}

---

##### `passwordMaxLockoutAttempts`<sup>Optional</sup> <a name="passwordMaxLockoutAttempts" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMaxLockoutAttempts"></a>

- *Type:* java.lang.Number

Number of unsuccessful login attempts allowed before lockout: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_max_lockout_attempts PasswordPolicy#password_max_lockout_attempts}

---

##### `passwordMinAgeMinutes`<sup>Optional</sup> <a name="passwordMinAgeMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinAgeMinutes"></a>

- *Type:* java.lang.Number

Minimum time interval in minutes between password changes: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_age_minutes PasswordPolicy#password_min_age_minutes}

---

##### `passwordMinLength`<sup>Optional</sup> <a name="passwordMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinLength"></a>

- *Type:* java.lang.Number

Minimum password length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_length PasswordPolicy#password_min_length}

---

##### `passwordMinLowercase`<sup>Optional</sup> <a name="passwordMinLowercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinLowercase"></a>

- *Type:* java.lang.Number

If a password must contain at least one lower case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_lowercase PasswordPolicy#password_min_lowercase}

---

##### `passwordMinNumber`<sup>Optional</sup> <a name="passwordMinNumber" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinNumber"></a>

- *Type:* java.lang.Number

If a password must contain at least one number: 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_number PasswordPolicy#password_min_number}

---

##### `passwordMinSymbol`<sup>Optional</sup> <a name="passwordMinSymbol" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinSymbol"></a>

- *Type:* java.lang.Number

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_symbol PasswordPolicy#password_min_symbol}

---

##### `passwordMinUppercase`<sup>Optional</sup> <a name="passwordMinUppercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinUppercase"></a>

- *Type:* java.lang.Number

If a password must contain at least one upper case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_uppercase PasswordPolicy#password_min_uppercase}

---

##### `passwordShowLockoutFailures`<sup>Optional</sup> <a name="passwordShowLockoutFailures" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordShowLockoutFailures"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If a user should be informed when their account is locked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_show_lockout_failures PasswordPolicy#password_show_lockout_failures}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#priority PasswordPolicy#priority}

---

##### `questionMinLength`<sup>Optional</sup> <a name="questionMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.questionMinLength"></a>

- *Type:* java.lang.Number

Min length of the password recovery question answer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#question_min_length PasswordPolicy#question_min_length}

---

##### `questionRecovery`<sup>Optional</sup> <a name="questionRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.questionRecovery"></a>

- *Type:* java.lang.String

Enable or disable security question password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#question_recovery PasswordPolicy#question_recovery}

---

##### `recoveryEmailToken`<sup>Optional</sup> <a name="recoveryEmailToken" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.recoveryEmailToken"></a>

- *Type:* java.lang.Number

Lifetime in minutes of the recovery email token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#recovery_email_token PasswordPolicy#recovery_email_token}

---

##### `skipUnlock`<sup>Optional</sup> <a name="skipUnlock" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.skipUnlock"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#skip_unlock PasswordPolicy#skip_unlock}

---

##### `smsRecovery`<sup>Optional</sup> <a name="smsRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.smsRecovery"></a>

- *Type:* java.lang.String

Enable or disable SMS password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#sms_recovery PasswordPolicy#sms_recovery}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#status PasswordPolicy#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetAuthProvider">resetAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetCallRecovery">resetCallRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetEmailRecovery">resetEmailRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetGroupsIncluded">resetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordAutoUnlockMinutes">resetPasswordAutoUnlockMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordDictionaryLookup">resetPasswordDictionaryLookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeFirstName">resetPasswordExcludeFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeLastName">resetPasswordExcludeLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeUsername">resetPasswordExcludeUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExpireWarnDays">resetPasswordExpireWarnDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordHistoryCount">resetPasswordHistoryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordLockoutNotificationChannels">resetPasswordLockoutNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMaxAgeDays">resetPasswordMaxAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMaxLockoutAttempts">resetPasswordMaxLockoutAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinAgeMinutes">resetPasswordMinAgeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinLength">resetPasswordMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinLowercase">resetPasswordMinLowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinNumber">resetPasswordMinNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinSymbol">resetPasswordMinSymbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinUppercase">resetPasswordMinUppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordShowLockoutFailures">resetPasswordShowLockoutFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetQuestionMinLength">resetQuestionMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetQuestionRecovery">resetQuestionRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetRecoveryEmailToken">resetRecoveryEmailToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetSkipUnlock">resetSkipUnlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetSmsRecovery">resetSmsRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAuthProvider` <a name="resetAuthProvider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetAuthProvider"></a>

```java
public void resetAuthProvider()
```

##### `resetCallRecovery` <a name="resetCallRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetCallRecovery"></a>

```java
public void resetCallRecovery()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEmailRecovery` <a name="resetEmailRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetEmailRecovery"></a>

```java
public void resetEmailRecovery()
```

##### `resetGroupsIncluded` <a name="resetGroupsIncluded" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetGroupsIncluded"></a>

```java
public void resetGroupsIncluded()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetPasswordAutoUnlockMinutes` <a name="resetPasswordAutoUnlockMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordAutoUnlockMinutes"></a>

```java
public void resetPasswordAutoUnlockMinutes()
```

##### `resetPasswordDictionaryLookup` <a name="resetPasswordDictionaryLookup" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordDictionaryLookup"></a>

```java
public void resetPasswordDictionaryLookup()
```

##### `resetPasswordExcludeFirstName` <a name="resetPasswordExcludeFirstName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeFirstName"></a>

```java
public void resetPasswordExcludeFirstName()
```

##### `resetPasswordExcludeLastName` <a name="resetPasswordExcludeLastName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeLastName"></a>

```java
public void resetPasswordExcludeLastName()
```

##### `resetPasswordExcludeUsername` <a name="resetPasswordExcludeUsername" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeUsername"></a>

```java
public void resetPasswordExcludeUsername()
```

##### `resetPasswordExpireWarnDays` <a name="resetPasswordExpireWarnDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExpireWarnDays"></a>

```java
public void resetPasswordExpireWarnDays()
```

##### `resetPasswordHistoryCount` <a name="resetPasswordHistoryCount" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordHistoryCount"></a>

```java
public void resetPasswordHistoryCount()
```

##### `resetPasswordLockoutNotificationChannels` <a name="resetPasswordLockoutNotificationChannels" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordLockoutNotificationChannels"></a>

```java
public void resetPasswordLockoutNotificationChannels()
```

##### `resetPasswordMaxAgeDays` <a name="resetPasswordMaxAgeDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMaxAgeDays"></a>

```java
public void resetPasswordMaxAgeDays()
```

##### `resetPasswordMaxLockoutAttempts` <a name="resetPasswordMaxLockoutAttempts" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMaxLockoutAttempts"></a>

```java
public void resetPasswordMaxLockoutAttempts()
```

##### `resetPasswordMinAgeMinutes` <a name="resetPasswordMinAgeMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinAgeMinutes"></a>

```java
public void resetPasswordMinAgeMinutes()
```

##### `resetPasswordMinLength` <a name="resetPasswordMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinLength"></a>

```java
public void resetPasswordMinLength()
```

##### `resetPasswordMinLowercase` <a name="resetPasswordMinLowercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinLowercase"></a>

```java
public void resetPasswordMinLowercase()
```

##### `resetPasswordMinNumber` <a name="resetPasswordMinNumber" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinNumber"></a>

```java
public void resetPasswordMinNumber()
```

##### `resetPasswordMinSymbol` <a name="resetPasswordMinSymbol" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinSymbol"></a>

```java
public void resetPasswordMinSymbol()
```

##### `resetPasswordMinUppercase` <a name="resetPasswordMinUppercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinUppercase"></a>

```java
public void resetPasswordMinUppercase()
```

##### `resetPasswordShowLockoutFailures` <a name="resetPasswordShowLockoutFailures" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordShowLockoutFailures"></a>

```java
public void resetPasswordShowLockoutFailures()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetQuestionMinLength` <a name="resetQuestionMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetQuestionMinLength"></a>

```java
public void resetQuestionMinLength()
```

##### `resetQuestionRecovery` <a name="resetQuestionRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetQuestionRecovery"></a>

```java
public void resetQuestionRecovery()
```

##### `resetRecoveryEmailToken` <a name="resetRecoveryEmailToken" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetRecoveryEmailToken"></a>

```java
public void resetRecoveryEmailToken()
```

##### `resetSkipUnlock` <a name="resetSkipUnlock" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetSkipUnlock"></a>

```java
public void resetSkipUnlock()
```

##### `resetSmsRecovery` <a name="resetSmsRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetSmsRecovery"></a>

```java
public void resetSmsRecovery()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.password_policy.PasswordPolicy;

PasswordPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.password_policy.PasswordPolicy;

PasswordPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.password_policy.PasswordPolicy;

PasswordPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.authProviderInput">authProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.callRecoveryInput">callRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.emailRecoveryInput">emailRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.groupsIncludedInput">groupsIncludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordAutoUnlockMinutesInput">passwordAutoUnlockMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordDictionaryLookupInput">passwordDictionaryLookupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeFirstNameInput">passwordExcludeFirstNameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeLastNameInput">passwordExcludeLastNameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeUsernameInput">passwordExcludeUsernameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExpireWarnDaysInput">passwordExpireWarnDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordHistoryCountInput">passwordHistoryCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordLockoutNotificationChannelsInput">passwordLockoutNotificationChannelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxAgeDaysInput">passwordMaxAgeDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxLockoutAttemptsInput">passwordMaxLockoutAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinAgeMinutesInput">passwordMinAgeMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLengthInput">passwordMinLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLowercaseInput">passwordMinLowercaseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinNumberInput">passwordMinNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinSymbolInput">passwordMinSymbolInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinUppercaseInput">passwordMinUppercaseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordShowLockoutFailuresInput">passwordShowLockoutFailuresInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionMinLengthInput">questionMinLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionRecoveryInput">questionRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.recoveryEmailTokenInput">recoveryEmailTokenInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.skipUnlockInput">skipUnlockInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.smsRecoveryInput">smsRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.authProvider">authProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.callRecovery">callRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.emailRecovery">emailRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordAutoUnlockMinutes">passwordAutoUnlockMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordDictionaryLookup">passwordDictionaryLookup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeFirstName">passwordExcludeFirstName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeLastName">passwordExcludeLastName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeUsername">passwordExcludeUsername</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExpireWarnDays">passwordExpireWarnDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordHistoryCount">passwordHistoryCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordLockoutNotificationChannels">passwordLockoutNotificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxLockoutAttempts">passwordMaxLockoutAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinAgeMinutes">passwordMinAgeMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLength">passwordMinLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLowercase">passwordMinLowercase</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinNumber">passwordMinNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinSymbol">passwordMinSymbol</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinUppercase">passwordMinUppercase</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordShowLockoutFailures">passwordShowLockoutFailures</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionMinLength">questionMinLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionRecovery">questionRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.recoveryEmailToken">recoveryEmailToken</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.skipUnlock">skipUnlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.smsRecovery">smsRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authProviderInput`<sup>Optional</sup> <a name="authProviderInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.authProviderInput"></a>

```java
public java.lang.String getAuthProviderInput();
```

- *Type:* java.lang.String

---

##### `callRecoveryInput`<sup>Optional</sup> <a name="callRecoveryInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.callRecoveryInput"></a>

```java
public java.lang.String getCallRecoveryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `emailRecoveryInput`<sup>Optional</sup> <a name="emailRecoveryInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.emailRecoveryInput"></a>

```java
public java.lang.String getEmailRecoveryInput();
```

- *Type:* java.lang.String

---

##### `groupsIncludedInput`<sup>Optional</sup> <a name="groupsIncludedInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.groupsIncludedInput"></a>

```java
public java.util.List<java.lang.String> getGroupsIncludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordAutoUnlockMinutesInput`<sup>Optional</sup> <a name="passwordAutoUnlockMinutesInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordAutoUnlockMinutesInput"></a>

```java
public java.lang.Number getPasswordAutoUnlockMinutesInput();
```

- *Type:* java.lang.Number

---

##### `passwordDictionaryLookupInput`<sup>Optional</sup> <a name="passwordDictionaryLookupInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordDictionaryLookupInput"></a>

```java
public java.lang.Object getPasswordDictionaryLookupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeFirstNameInput`<sup>Optional</sup> <a name="passwordExcludeFirstNameInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeFirstNameInput"></a>

```java
public java.lang.Object getPasswordExcludeFirstNameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeLastNameInput`<sup>Optional</sup> <a name="passwordExcludeLastNameInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeLastNameInput"></a>

```java
public java.lang.Object getPasswordExcludeLastNameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeUsernameInput`<sup>Optional</sup> <a name="passwordExcludeUsernameInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeUsernameInput"></a>

```java
public java.lang.Object getPasswordExcludeUsernameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExpireWarnDaysInput`<sup>Optional</sup> <a name="passwordExpireWarnDaysInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExpireWarnDaysInput"></a>

```java
public java.lang.Number getPasswordExpireWarnDaysInput();
```

- *Type:* java.lang.Number

---

##### `passwordHistoryCountInput`<sup>Optional</sup> <a name="passwordHistoryCountInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordHistoryCountInput"></a>

```java
public java.lang.Number getPasswordHistoryCountInput();
```

- *Type:* java.lang.Number

---

##### `passwordLockoutNotificationChannelsInput`<sup>Optional</sup> <a name="passwordLockoutNotificationChannelsInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordLockoutNotificationChannelsInput"></a>

```java
public java.util.List<java.lang.String> getPasswordLockoutNotificationChannelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordMaxAgeDaysInput`<sup>Optional</sup> <a name="passwordMaxAgeDaysInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxAgeDaysInput"></a>

```java
public java.lang.Number getPasswordMaxAgeDaysInput();
```

- *Type:* java.lang.Number

---

##### `passwordMaxLockoutAttemptsInput`<sup>Optional</sup> <a name="passwordMaxLockoutAttemptsInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxLockoutAttemptsInput"></a>

```java
public java.lang.Number getPasswordMaxLockoutAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinAgeMinutesInput`<sup>Optional</sup> <a name="passwordMinAgeMinutesInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinAgeMinutesInput"></a>

```java
public java.lang.Number getPasswordMinAgeMinutesInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinLengthInput`<sup>Optional</sup> <a name="passwordMinLengthInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLengthInput"></a>

```java
public java.lang.Number getPasswordMinLengthInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinLowercaseInput`<sup>Optional</sup> <a name="passwordMinLowercaseInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLowercaseInput"></a>

```java
public java.lang.Number getPasswordMinLowercaseInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinNumberInput`<sup>Optional</sup> <a name="passwordMinNumberInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinNumberInput"></a>

```java
public java.lang.Number getPasswordMinNumberInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinSymbolInput`<sup>Optional</sup> <a name="passwordMinSymbolInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinSymbolInput"></a>

```java
public java.lang.Number getPasswordMinSymbolInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinUppercaseInput`<sup>Optional</sup> <a name="passwordMinUppercaseInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinUppercaseInput"></a>

```java
public java.lang.Number getPasswordMinUppercaseInput();
```

- *Type:* java.lang.Number

---

##### `passwordShowLockoutFailuresInput`<sup>Optional</sup> <a name="passwordShowLockoutFailuresInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordShowLockoutFailuresInput"></a>

```java
public java.lang.Object getPasswordShowLockoutFailuresInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `questionMinLengthInput`<sup>Optional</sup> <a name="questionMinLengthInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionMinLengthInput"></a>

```java
public java.lang.Number getQuestionMinLengthInput();
```

- *Type:* java.lang.Number

---

##### `questionRecoveryInput`<sup>Optional</sup> <a name="questionRecoveryInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionRecoveryInput"></a>

```java
public java.lang.String getQuestionRecoveryInput();
```

- *Type:* java.lang.String

---

##### `recoveryEmailTokenInput`<sup>Optional</sup> <a name="recoveryEmailTokenInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.recoveryEmailTokenInput"></a>

```java
public java.lang.Number getRecoveryEmailTokenInput();
```

- *Type:* java.lang.Number

---

##### `skipUnlockInput`<sup>Optional</sup> <a name="skipUnlockInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.skipUnlockInput"></a>

```java
public java.lang.Object getSkipUnlockInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smsRecoveryInput`<sup>Optional</sup> <a name="smsRecoveryInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.smsRecoveryInput"></a>

```java
public java.lang.String getSmsRecoveryInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `authProvider`<sup>Required</sup> <a name="authProvider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.authProvider"></a>

```java
public java.lang.String getAuthProvider();
```

- *Type:* java.lang.String

---

##### `callRecovery`<sup>Required</sup> <a name="callRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.callRecovery"></a>

```java
public java.lang.String getCallRecovery();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `emailRecovery`<sup>Required</sup> <a name="emailRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.emailRecovery"></a>

```java
public java.lang.String getEmailRecovery();
```

- *Type:* java.lang.String

---

##### `groupsIncluded`<sup>Required</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.groupsIncluded"></a>

```java
public java.util.List<java.lang.String> getGroupsIncluded();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `passwordAutoUnlockMinutes`<sup>Required</sup> <a name="passwordAutoUnlockMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordAutoUnlockMinutes"></a>

```java
public java.lang.Number getPasswordAutoUnlockMinutes();
```

- *Type:* java.lang.Number

---

##### `passwordDictionaryLookup`<sup>Required</sup> <a name="passwordDictionaryLookup" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordDictionaryLookup"></a>

```java
public java.lang.Object getPasswordDictionaryLookup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeFirstName`<sup>Required</sup> <a name="passwordExcludeFirstName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeFirstName"></a>

```java
public java.lang.Object getPasswordExcludeFirstName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeLastName`<sup>Required</sup> <a name="passwordExcludeLastName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeLastName"></a>

```java
public java.lang.Object getPasswordExcludeLastName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeUsername`<sup>Required</sup> <a name="passwordExcludeUsername" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeUsername"></a>

```java
public java.lang.Object getPasswordExcludeUsername();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExpireWarnDays`<sup>Required</sup> <a name="passwordExpireWarnDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExpireWarnDays"></a>

```java
public java.lang.Number getPasswordExpireWarnDays();
```

- *Type:* java.lang.Number

---

##### `passwordHistoryCount`<sup>Required</sup> <a name="passwordHistoryCount" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordHistoryCount"></a>

```java
public java.lang.Number getPasswordHistoryCount();
```

- *Type:* java.lang.Number

---

##### `passwordLockoutNotificationChannels`<sup>Required</sup> <a name="passwordLockoutNotificationChannels" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordLockoutNotificationChannels"></a>

```java
public java.util.List<java.lang.String> getPasswordLockoutNotificationChannels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordMaxAgeDays`<sup>Required</sup> <a name="passwordMaxAgeDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxAgeDays"></a>

```java
public java.lang.Number getPasswordMaxAgeDays();
```

- *Type:* java.lang.Number

---

##### `passwordMaxLockoutAttempts`<sup>Required</sup> <a name="passwordMaxLockoutAttempts" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxLockoutAttempts"></a>

```java
public java.lang.Number getPasswordMaxLockoutAttempts();
```

- *Type:* java.lang.Number

---

##### `passwordMinAgeMinutes`<sup>Required</sup> <a name="passwordMinAgeMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinAgeMinutes"></a>

```java
public java.lang.Number getPasswordMinAgeMinutes();
```

- *Type:* java.lang.Number

---

##### `passwordMinLength`<sup>Required</sup> <a name="passwordMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLength"></a>

```java
public java.lang.Number getPasswordMinLength();
```

- *Type:* java.lang.Number

---

##### `passwordMinLowercase`<sup>Required</sup> <a name="passwordMinLowercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLowercase"></a>

```java
public java.lang.Number getPasswordMinLowercase();
```

- *Type:* java.lang.Number

---

##### `passwordMinNumber`<sup>Required</sup> <a name="passwordMinNumber" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinNumber"></a>

```java
public java.lang.Number getPasswordMinNumber();
```

- *Type:* java.lang.Number

---

##### `passwordMinSymbol`<sup>Required</sup> <a name="passwordMinSymbol" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinSymbol"></a>

```java
public java.lang.Number getPasswordMinSymbol();
```

- *Type:* java.lang.Number

---

##### `passwordMinUppercase`<sup>Required</sup> <a name="passwordMinUppercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinUppercase"></a>

```java
public java.lang.Number getPasswordMinUppercase();
```

- *Type:* java.lang.Number

---

##### `passwordShowLockoutFailures`<sup>Required</sup> <a name="passwordShowLockoutFailures" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordShowLockoutFailures"></a>

```java
public java.lang.Object getPasswordShowLockoutFailures();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `questionMinLength`<sup>Required</sup> <a name="questionMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionMinLength"></a>

```java
public java.lang.Number getQuestionMinLength();
```

- *Type:* java.lang.Number

---

##### `questionRecovery`<sup>Required</sup> <a name="questionRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionRecovery"></a>

```java
public java.lang.String getQuestionRecovery();
```

- *Type:* java.lang.String

---

##### `recoveryEmailToken`<sup>Required</sup> <a name="recoveryEmailToken" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.recoveryEmailToken"></a>

```java
public java.lang.Number getRecoveryEmailToken();
```

- *Type:* java.lang.Number

---

##### `skipUnlock`<sup>Required</sup> <a name="skipUnlock" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.skipUnlock"></a>

```java
public java.lang.Object getSkipUnlock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smsRecovery`<sup>Required</sup> <a name="smsRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.smsRecovery"></a>

```java
public java.lang.String getSmsRecovery();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordPolicyConfig <a name="PasswordPolicyConfig" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.password_policy.PasswordPolicyConfig;

PasswordPolicyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .authProvider(java.lang.String)
//  .callRecovery(java.lang.String)
//  .description(java.lang.String)
//  .emailRecovery(java.lang.String)
//  .groupsIncluded(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .passwordAutoUnlockMinutes(java.lang.Number)
//  .passwordDictionaryLookup(java.lang.Boolean)
//  .passwordDictionaryLookup(IResolvable)
//  .passwordExcludeFirstName(java.lang.Boolean)
//  .passwordExcludeFirstName(IResolvable)
//  .passwordExcludeLastName(java.lang.Boolean)
//  .passwordExcludeLastName(IResolvable)
//  .passwordExcludeUsername(java.lang.Boolean)
//  .passwordExcludeUsername(IResolvable)
//  .passwordExpireWarnDays(java.lang.Number)
//  .passwordHistoryCount(java.lang.Number)
//  .passwordLockoutNotificationChannels(java.util.List<java.lang.String>)
//  .passwordMaxAgeDays(java.lang.Number)
//  .passwordMaxLockoutAttempts(java.lang.Number)
//  .passwordMinAgeMinutes(java.lang.Number)
//  .passwordMinLength(java.lang.Number)
//  .passwordMinLowercase(java.lang.Number)
//  .passwordMinNumber(java.lang.Number)
//  .passwordMinSymbol(java.lang.Number)
//  .passwordMinUppercase(java.lang.Number)
//  .passwordShowLockoutFailures(java.lang.Boolean)
//  .passwordShowLockoutFailures(IResolvable)
//  .priority(java.lang.Number)
//  .questionMinLength(java.lang.Number)
//  .questionRecovery(java.lang.String)
//  .recoveryEmailToken(java.lang.Number)
//  .skipUnlock(java.lang.Boolean)
//  .skipUnlock(IResolvable)
//  .smsRecovery(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.authProvider">authProvider</a></code> | <code>java.lang.String</code> | Authentication Provider: OKTA, ACTIVE_DIRECTORY or LDAP. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.callRecovery">callRecovery</a></code> | <code>java.lang.String</code> | Enable or disable voice call recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.emailRecovery">emailRecovery</a></code> | <code>java.lang.String</code> | Enable or disable email password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordAutoUnlockMinutes">passwordAutoUnlockMinutes</a></code> | <code>java.lang.Number</code> | Number of minutes before a locked account is unlocked: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordDictionaryLookup">passwordDictionaryLookup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Check Passwords Against Common Password Dictionary. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeFirstName">passwordExcludeFirstName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeLastName">passwordExcludeLastName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeUsername">passwordExcludeUsername</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the user name must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExpireWarnDays">passwordExpireWarnDays</a></code> | <code>java.lang.Number</code> | Length in days a user will be warned before password expiry: 0 = no warning. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordHistoryCount">passwordHistoryCount</a></code> | <code>java.lang.Number</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordLockoutNotificationChannels">passwordLockoutNotificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>java.lang.Number</code> | Length in days a password is valid before expiry: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMaxLockoutAttempts">passwordMaxLockoutAttempts</a></code> | <code>java.lang.Number</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinAgeMinutes">passwordMinAgeMinutes</a></code> | <code>java.lang.Number</code> | Minimum time interval in minutes between password changes: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinLength">passwordMinLength</a></code> | <code>java.lang.Number</code> | Minimum password length. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinLowercase">passwordMinLowercase</a></code> | <code>java.lang.Number</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinNumber">passwordMinNumber</a></code> | <code>java.lang.Number</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinSymbol">passwordMinSymbol</a></code> | <code>java.lang.Number</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinUppercase">passwordMinUppercase</a></code> | <code>java.lang.Number</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordShowLockoutFailures">passwordShowLockoutFailures</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If a user should be informed when their account is locked. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.questionMinLength">questionMinLength</a></code> | <code>java.lang.Number</code> | Min length of the password recovery question answer. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.questionRecovery">questionRecovery</a></code> | <code>java.lang.String</code> | Enable or disable security question password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.recoveryEmailToken">recoveryEmailToken</a></code> | <code>java.lang.Number</code> | Lifetime in minutes of the recovery email token. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.skipUnlock">skipUnlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.smsRecovery">smsRecovery</a></code> | <code>java.lang.String</code> | Enable or disable SMS password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.status">status</a></code> | <code>java.lang.String</code> | Policy Status: ACTIVE or INACTIVE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Policy Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#name PasswordPolicy#name}

---

##### `authProvider`<sup>Optional</sup> <a name="authProvider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.authProvider"></a>

```java
public java.lang.String getAuthProvider();
```

- *Type:* java.lang.String

Authentication Provider: OKTA, ACTIVE_DIRECTORY or LDAP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#auth_provider PasswordPolicy#auth_provider}

---

##### `callRecovery`<sup>Optional</sup> <a name="callRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.callRecovery"></a>

```java
public java.lang.String getCallRecovery();
```

- *Type:* java.lang.String

Enable or disable voice call recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#call_recovery PasswordPolicy#call_recovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Policy Description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#description PasswordPolicy#description}

---

##### `emailRecovery`<sup>Optional</sup> <a name="emailRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.emailRecovery"></a>

```java
public java.lang.String getEmailRecovery();
```

- *Type:* java.lang.String

Enable or disable email password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#email_recovery PasswordPolicy#email_recovery}

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.groupsIncluded"></a>

```java
public java.util.List<java.lang.String> getGroupsIncluded();
```

- *Type:* java.util.List<java.lang.String>

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#groups_included PasswordPolicy#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passwordAutoUnlockMinutes`<sup>Optional</sup> <a name="passwordAutoUnlockMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordAutoUnlockMinutes"></a>

```java
public java.lang.Number getPasswordAutoUnlockMinutes();
```

- *Type:* java.lang.Number

Number of minutes before a locked account is unlocked: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_auto_unlock_minutes PasswordPolicy#password_auto_unlock_minutes}

---

##### `passwordDictionaryLookup`<sup>Optional</sup> <a name="passwordDictionaryLookup" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordDictionaryLookup"></a>

```java
public java.lang.Object getPasswordDictionaryLookup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Check Passwords Against Common Password Dictionary.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_dictionary_lookup PasswordPolicy#password_dictionary_lookup}

---

##### `passwordExcludeFirstName`<sup>Optional</sup> <a name="passwordExcludeFirstName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeFirstName"></a>

```java
public java.lang.Object getPasswordExcludeFirstName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_first_name PasswordPolicy#password_exclude_first_name}

---

##### `passwordExcludeLastName`<sup>Optional</sup> <a name="passwordExcludeLastName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeLastName"></a>

```java
public java.lang.Object getPasswordExcludeLastName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_last_name PasswordPolicy#password_exclude_last_name}

---

##### `passwordExcludeUsername`<sup>Optional</sup> <a name="passwordExcludeUsername" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeUsername"></a>

```java
public java.lang.Object getPasswordExcludeUsername();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the user name must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_username PasswordPolicy#password_exclude_username}

---

##### `passwordExpireWarnDays`<sup>Optional</sup> <a name="passwordExpireWarnDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExpireWarnDays"></a>

```java
public java.lang.Number getPasswordExpireWarnDays();
```

- *Type:* java.lang.Number

Length in days a user will be warned before password expiry: 0 = no warning.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_expire_warn_days PasswordPolicy#password_expire_warn_days}

---

##### `passwordHistoryCount`<sup>Optional</sup> <a name="passwordHistoryCount" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordHistoryCount"></a>

```java
public java.lang.Number getPasswordHistoryCount();
```

- *Type:* java.lang.Number

Number of distinct passwords that must be created before they can be reused: 0 = none.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_history_count PasswordPolicy#password_history_count}

---

##### `passwordLockoutNotificationChannels`<sup>Optional</sup> <a name="passwordLockoutNotificationChannels" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordLockoutNotificationChannels"></a>

```java
public java.util.List<java.lang.String> getPasswordLockoutNotificationChannels();
```

- *Type:* java.util.List<java.lang.String>

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_lockout_notification_channels PasswordPolicy#password_lockout_notification_channels}

---

##### `passwordMaxAgeDays`<sup>Optional</sup> <a name="passwordMaxAgeDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMaxAgeDays"></a>

```java
public java.lang.Number getPasswordMaxAgeDays();
```

- *Type:* java.lang.Number

Length in days a password is valid before expiry: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_max_age_days PasswordPolicy#password_max_age_days}

---

##### `passwordMaxLockoutAttempts`<sup>Optional</sup> <a name="passwordMaxLockoutAttempts" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMaxLockoutAttempts"></a>

```java
public java.lang.Number getPasswordMaxLockoutAttempts();
```

- *Type:* java.lang.Number

Number of unsuccessful login attempts allowed before lockout: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_max_lockout_attempts PasswordPolicy#password_max_lockout_attempts}

---

##### `passwordMinAgeMinutes`<sup>Optional</sup> <a name="passwordMinAgeMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinAgeMinutes"></a>

```java
public java.lang.Number getPasswordMinAgeMinutes();
```

- *Type:* java.lang.Number

Minimum time interval in minutes between password changes: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_age_minutes PasswordPolicy#password_min_age_minutes}

---

##### `passwordMinLength`<sup>Optional</sup> <a name="passwordMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinLength"></a>

```java
public java.lang.Number getPasswordMinLength();
```

- *Type:* java.lang.Number

Minimum password length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_length PasswordPolicy#password_min_length}

---

##### `passwordMinLowercase`<sup>Optional</sup> <a name="passwordMinLowercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinLowercase"></a>

```java
public java.lang.Number getPasswordMinLowercase();
```

- *Type:* java.lang.Number

If a password must contain at least one lower case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_lowercase PasswordPolicy#password_min_lowercase}

---

##### `passwordMinNumber`<sup>Optional</sup> <a name="passwordMinNumber" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinNumber"></a>

```java
public java.lang.Number getPasswordMinNumber();
```

- *Type:* java.lang.Number

If a password must contain at least one number: 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_number PasswordPolicy#password_min_number}

---

##### `passwordMinSymbol`<sup>Optional</sup> <a name="passwordMinSymbol" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinSymbol"></a>

```java
public java.lang.Number getPasswordMinSymbol();
```

- *Type:* java.lang.Number

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_symbol PasswordPolicy#password_min_symbol}

---

##### `passwordMinUppercase`<sup>Optional</sup> <a name="passwordMinUppercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinUppercase"></a>

```java
public java.lang.Number getPasswordMinUppercase();
```

- *Type:* java.lang.Number

If a password must contain at least one upper case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_uppercase PasswordPolicy#password_min_uppercase}

---

##### `passwordShowLockoutFailures`<sup>Optional</sup> <a name="passwordShowLockoutFailures" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordShowLockoutFailures"></a>

```java
public java.lang.Object getPasswordShowLockoutFailures();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If a user should be informed when their account is locked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_show_lockout_failures PasswordPolicy#password_show_lockout_failures}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#priority PasswordPolicy#priority}

---

##### `questionMinLength`<sup>Optional</sup> <a name="questionMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.questionMinLength"></a>

```java
public java.lang.Number getQuestionMinLength();
```

- *Type:* java.lang.Number

Min length of the password recovery question answer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#question_min_length PasswordPolicy#question_min_length}

---

##### `questionRecovery`<sup>Optional</sup> <a name="questionRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.questionRecovery"></a>

```java
public java.lang.String getQuestionRecovery();
```

- *Type:* java.lang.String

Enable or disable security question password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#question_recovery PasswordPolicy#question_recovery}

---

##### `recoveryEmailToken`<sup>Optional</sup> <a name="recoveryEmailToken" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.recoveryEmailToken"></a>

```java
public java.lang.Number getRecoveryEmailToken();
```

- *Type:* java.lang.Number

Lifetime in minutes of the recovery email token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#recovery_email_token PasswordPolicy#recovery_email_token}

---

##### `skipUnlock`<sup>Optional</sup> <a name="skipUnlock" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.skipUnlock"></a>

```java
public java.lang.Object getSkipUnlock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#skip_unlock PasswordPolicy#skip_unlock}

---

##### `smsRecovery`<sup>Optional</sup> <a name="smsRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.smsRecovery"></a>

```java
public java.lang.String getSmsRecovery();
```

- *Type:* java.lang.String

Enable or disable SMS password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#sms_recovery PasswordPolicy#sms_recovery}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#status PasswordPolicy#status}

---



