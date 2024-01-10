# `policyPasswordDefault` Submodule <a name="`policyPasswordDefault` Submodule" id="@cdktf/provider-okta.policyPasswordDefault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyPasswordDefault <a name="PolicyPasswordDefault" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default okta_policy_password_default}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_password_default.PolicyPasswordDefault;

PolicyPasswordDefault.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .callRecovery(java.lang.String)
//  .emailRecovery(java.lang.String)
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
//  .questionMinLength(java.lang.Number)
//  .questionRecovery(java.lang.String)
//  .recoveryEmailToken(java.lang.Number)
//  .skipUnlock(java.lang.Boolean)
//  .skipUnlock(IResolvable)
//  .smsRecovery(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.callRecovery">callRecovery</a></code> | <code>java.lang.String</code> | Enable or disable voice call recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.emailRecovery">emailRecovery</a></code> | <code>java.lang.String</code> | Enable or disable email password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#id PolicyPasswordDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordAutoUnlockMinutes">passwordAutoUnlockMinutes</a></code> | <code>java.lang.Number</code> | Number of minutes before a locked account is unlocked: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordDictionaryLookup">passwordDictionaryLookup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Check Passwords Against Common Password Dictionary. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExcludeFirstName">passwordExcludeFirstName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExcludeLastName">passwordExcludeLastName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExcludeUsername">passwordExcludeUsername</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the user name must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExpireWarnDays">passwordExpireWarnDays</a></code> | <code>java.lang.Number</code> | Length in days a user will be warned before password expiry: 0 = no warning. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordHistoryCount">passwordHistoryCount</a></code> | <code>java.lang.Number</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordLockoutNotificationChannels">passwordLockoutNotificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>java.lang.Number</code> | Length in days a password is valid before expiry: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMaxLockoutAttempts">passwordMaxLockoutAttempts</a></code> | <code>java.lang.Number</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinAgeMinutes">passwordMinAgeMinutes</a></code> | <code>java.lang.Number</code> | Minimum time interval in minutes between password changes: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinLength">passwordMinLength</a></code> | <code>java.lang.Number</code> | Minimum password length. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinLowercase">passwordMinLowercase</a></code> | <code>java.lang.Number</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinNumber">passwordMinNumber</a></code> | <code>java.lang.Number</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinSymbol">passwordMinSymbol</a></code> | <code>java.lang.Number</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinUppercase">passwordMinUppercase</a></code> | <code>java.lang.Number</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordShowLockoutFailures">passwordShowLockoutFailures</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If a user should be informed when their account is locked. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.questionMinLength">questionMinLength</a></code> | <code>java.lang.Number</code> | Min length of the password recovery question answer. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.questionRecovery">questionRecovery</a></code> | <code>java.lang.String</code> | Enable or disable security question password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.recoveryEmailToken">recoveryEmailToken</a></code> | <code>java.lang.Number</code> | Lifetime in minutes of the recovery email token. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.skipUnlock">skipUnlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.smsRecovery">smsRecovery</a></code> | <code>java.lang.String</code> | Enable or disable SMS password recovery: ACTIVE or INACTIVE. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `callRecovery`<sup>Optional</sup> <a name="callRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.callRecovery"></a>

- *Type:* java.lang.String

Enable or disable voice call recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#call_recovery PolicyPasswordDefault#call_recovery}

---

##### `emailRecovery`<sup>Optional</sup> <a name="emailRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.emailRecovery"></a>

- *Type:* java.lang.String

Enable or disable email password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#email_recovery PolicyPasswordDefault#email_recovery}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#id PolicyPasswordDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passwordAutoUnlockMinutes`<sup>Optional</sup> <a name="passwordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordAutoUnlockMinutes"></a>

- *Type:* java.lang.Number

Number of minutes before a locked account is unlocked: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_auto_unlock_minutes PolicyPasswordDefault#password_auto_unlock_minutes}

---

##### `passwordDictionaryLookup`<sup>Optional</sup> <a name="passwordDictionaryLookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordDictionaryLookup"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Check Passwords Against Common Password Dictionary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_dictionary_lookup PolicyPasswordDefault#password_dictionary_lookup}

---

##### `passwordExcludeFirstName`<sup>Optional</sup> <a name="passwordExcludeFirstName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExcludeFirstName"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_exclude_first_name PolicyPasswordDefault#password_exclude_first_name}

---

##### `passwordExcludeLastName`<sup>Optional</sup> <a name="passwordExcludeLastName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExcludeLastName"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_exclude_last_name PolicyPasswordDefault#password_exclude_last_name}

---

##### `passwordExcludeUsername`<sup>Optional</sup> <a name="passwordExcludeUsername" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExcludeUsername"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the user name must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_exclude_username PolicyPasswordDefault#password_exclude_username}

---

##### `passwordExpireWarnDays`<sup>Optional</sup> <a name="passwordExpireWarnDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordExpireWarnDays"></a>

- *Type:* java.lang.Number

Length in days a user will be warned before password expiry: 0 = no warning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_expire_warn_days PolicyPasswordDefault#password_expire_warn_days}

---

##### `passwordHistoryCount`<sup>Optional</sup> <a name="passwordHistoryCount" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordHistoryCount"></a>

- *Type:* java.lang.Number

Number of distinct passwords that must be created before they can be reused: 0 = none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_history_count PolicyPasswordDefault#password_history_count}

---

##### `passwordLockoutNotificationChannels`<sup>Optional</sup> <a name="passwordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordLockoutNotificationChannels"></a>

- *Type:* java.util.List<java.lang.String>

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_lockout_notification_channels PolicyPasswordDefault#password_lockout_notification_channels}

---

##### `passwordMaxAgeDays`<sup>Optional</sup> <a name="passwordMaxAgeDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMaxAgeDays"></a>

- *Type:* java.lang.Number

Length in days a password is valid before expiry: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_max_age_days PolicyPasswordDefault#password_max_age_days}

---

##### `passwordMaxLockoutAttempts`<sup>Optional</sup> <a name="passwordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMaxLockoutAttempts"></a>

- *Type:* java.lang.Number

Number of unsuccessful login attempts allowed before lockout: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_max_lockout_attempts PolicyPasswordDefault#password_max_lockout_attempts}

---

##### `passwordMinAgeMinutes`<sup>Optional</sup> <a name="passwordMinAgeMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinAgeMinutes"></a>

- *Type:* java.lang.Number

Minimum time interval in minutes between password changes: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_min_age_minutes PolicyPasswordDefault#password_min_age_minutes}

---

##### `passwordMinLength`<sup>Optional</sup> <a name="passwordMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinLength"></a>

- *Type:* java.lang.Number

Minimum password length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_min_length PolicyPasswordDefault#password_min_length}

---

##### `passwordMinLowercase`<sup>Optional</sup> <a name="passwordMinLowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinLowercase"></a>

- *Type:* java.lang.Number

If a password must contain at least one lower case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_min_lowercase PolicyPasswordDefault#password_min_lowercase}

---

##### `passwordMinNumber`<sup>Optional</sup> <a name="passwordMinNumber" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinNumber"></a>

- *Type:* java.lang.Number

If a password must contain at least one number: 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_min_number PolicyPasswordDefault#password_min_number}

---

##### `passwordMinSymbol`<sup>Optional</sup> <a name="passwordMinSymbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinSymbol"></a>

- *Type:* java.lang.Number

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_min_symbol PolicyPasswordDefault#password_min_symbol}

---

##### `passwordMinUppercase`<sup>Optional</sup> <a name="passwordMinUppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordMinUppercase"></a>

- *Type:* java.lang.Number

If a password must contain at least one upper case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_min_uppercase PolicyPasswordDefault#password_min_uppercase}

---

##### `passwordShowLockoutFailures`<sup>Optional</sup> <a name="passwordShowLockoutFailures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.passwordShowLockoutFailures"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If a user should be informed when their account is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_show_lockout_failures PolicyPasswordDefault#password_show_lockout_failures}

---

##### `questionMinLength`<sup>Optional</sup> <a name="questionMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.questionMinLength"></a>

- *Type:* java.lang.Number

Min length of the password recovery question answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#question_min_length PolicyPasswordDefault#question_min_length}

---

##### `questionRecovery`<sup>Optional</sup> <a name="questionRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.questionRecovery"></a>

- *Type:* java.lang.String

Enable or disable security question password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#question_recovery PolicyPasswordDefault#question_recovery}

---

##### `recoveryEmailToken`<sup>Optional</sup> <a name="recoveryEmailToken" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.recoveryEmailToken"></a>

- *Type:* java.lang.Number

Lifetime in minutes of the recovery email token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#recovery_email_token PolicyPasswordDefault#recovery_email_token}

---

##### `skipUnlock`<sup>Optional</sup> <a name="skipUnlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.skipUnlock"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#skip_unlock PolicyPasswordDefault#skip_unlock}

---

##### `smsRecovery`<sup>Optional</sup> <a name="smsRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.smsRecovery"></a>

- *Type:* java.lang.String

Enable or disable SMS password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#sms_recovery PolicyPasswordDefault#sms_recovery}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetCallRecovery">resetCallRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetEmailRecovery">resetEmailRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordAutoUnlockMinutes">resetPasswordAutoUnlockMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordDictionaryLookup">resetPasswordDictionaryLookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeFirstName">resetPasswordExcludeFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeLastName">resetPasswordExcludeLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeUsername">resetPasswordExcludeUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExpireWarnDays">resetPasswordExpireWarnDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordHistoryCount">resetPasswordHistoryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordLockoutNotificationChannels">resetPasswordLockoutNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxAgeDays">resetPasswordMaxAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxLockoutAttempts">resetPasswordMaxLockoutAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinAgeMinutes">resetPasswordMinAgeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLength">resetPasswordMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLowercase">resetPasswordMinLowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinNumber">resetPasswordMinNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinSymbol">resetPasswordMinSymbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinUppercase">resetPasswordMinUppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordShowLockoutFailures">resetPasswordShowLockoutFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionMinLength">resetQuestionMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionRecovery">resetQuestionRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetRecoveryEmailToken">resetRecoveryEmailToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSkipUnlock">resetSkipUnlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSmsRecovery">resetSmsRecovery</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCallRecovery` <a name="resetCallRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetCallRecovery"></a>

```java
public void resetCallRecovery()
```

##### `resetEmailRecovery` <a name="resetEmailRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetEmailRecovery"></a>

```java
public void resetEmailRecovery()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetId"></a>

```java
public void resetId()
```

##### `resetPasswordAutoUnlockMinutes` <a name="resetPasswordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordAutoUnlockMinutes"></a>

```java
public void resetPasswordAutoUnlockMinutes()
```

##### `resetPasswordDictionaryLookup` <a name="resetPasswordDictionaryLookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordDictionaryLookup"></a>

```java
public void resetPasswordDictionaryLookup()
```

##### `resetPasswordExcludeFirstName` <a name="resetPasswordExcludeFirstName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeFirstName"></a>

```java
public void resetPasswordExcludeFirstName()
```

##### `resetPasswordExcludeLastName` <a name="resetPasswordExcludeLastName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeLastName"></a>

```java
public void resetPasswordExcludeLastName()
```

##### `resetPasswordExcludeUsername` <a name="resetPasswordExcludeUsername" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeUsername"></a>

```java
public void resetPasswordExcludeUsername()
```

##### `resetPasswordExpireWarnDays` <a name="resetPasswordExpireWarnDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExpireWarnDays"></a>

```java
public void resetPasswordExpireWarnDays()
```

##### `resetPasswordHistoryCount` <a name="resetPasswordHistoryCount" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordHistoryCount"></a>

```java
public void resetPasswordHistoryCount()
```

##### `resetPasswordLockoutNotificationChannels` <a name="resetPasswordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordLockoutNotificationChannels"></a>

```java
public void resetPasswordLockoutNotificationChannels()
```

##### `resetPasswordMaxAgeDays` <a name="resetPasswordMaxAgeDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxAgeDays"></a>

```java
public void resetPasswordMaxAgeDays()
```

##### `resetPasswordMaxLockoutAttempts` <a name="resetPasswordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxLockoutAttempts"></a>

```java
public void resetPasswordMaxLockoutAttempts()
```

##### `resetPasswordMinAgeMinutes` <a name="resetPasswordMinAgeMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinAgeMinutes"></a>

```java
public void resetPasswordMinAgeMinutes()
```

##### `resetPasswordMinLength` <a name="resetPasswordMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLength"></a>

```java
public void resetPasswordMinLength()
```

##### `resetPasswordMinLowercase` <a name="resetPasswordMinLowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLowercase"></a>

```java
public void resetPasswordMinLowercase()
```

##### `resetPasswordMinNumber` <a name="resetPasswordMinNumber" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinNumber"></a>

```java
public void resetPasswordMinNumber()
```

##### `resetPasswordMinSymbol` <a name="resetPasswordMinSymbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinSymbol"></a>

```java
public void resetPasswordMinSymbol()
```

##### `resetPasswordMinUppercase` <a name="resetPasswordMinUppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinUppercase"></a>

```java
public void resetPasswordMinUppercase()
```

##### `resetPasswordShowLockoutFailures` <a name="resetPasswordShowLockoutFailures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordShowLockoutFailures"></a>

```java
public void resetPasswordShowLockoutFailures()
```

##### `resetQuestionMinLength` <a name="resetQuestionMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionMinLength"></a>

```java
public void resetQuestionMinLength()
```

##### `resetQuestionRecovery` <a name="resetQuestionRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionRecovery"></a>

```java
public void resetQuestionRecovery()
```

##### `resetRecoveryEmailToken` <a name="resetRecoveryEmailToken" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetRecoveryEmailToken"></a>

```java
public void resetRecoveryEmailToken()
```

##### `resetSkipUnlock` <a name="resetSkipUnlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSkipUnlock"></a>

```java
public void resetSkipUnlock()
```

##### `resetSmsRecovery` <a name="resetSmsRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSmsRecovery"></a>

```java
public void resetSmsRecovery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyPasswordDefault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_password_default.PolicyPasswordDefault;

PolicyPasswordDefault.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_password_default.PolicyPasswordDefault;

PolicyPasswordDefault.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_password_default.PolicyPasswordDefault;

PolicyPasswordDefault.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_password_default.PolicyPasswordDefault;

PolicyPasswordDefault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PolicyPasswordDefault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PolicyPasswordDefault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PolicyPasswordDefault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PolicyPasswordDefault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PolicyPasswordDefault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultAuthProvider">defaultAuthProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultIncludedGroupId">defaultIncludedGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecoveryInput">callRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecoveryInput">emailRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutesInput">passwordAutoUnlockMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookupInput">passwordDictionaryLookupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstNameInput">passwordExcludeFirstNameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastNameInput">passwordExcludeLastNameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsernameInput">passwordExcludeUsernameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDaysInput">passwordExpireWarnDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCountInput">passwordHistoryCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannelsInput">passwordLockoutNotificationChannelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDaysInput">passwordMaxAgeDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttemptsInput">passwordMaxLockoutAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutesInput">passwordMinAgeMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLengthInput">passwordMinLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercaseInput">passwordMinLowercaseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumberInput">passwordMinNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbolInput">passwordMinSymbolInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercaseInput">passwordMinUppercaseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailuresInput">passwordShowLockoutFailuresInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLengthInput">questionMinLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecoveryInput">questionRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailTokenInput">recoveryEmailTokenInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlockInput">skipUnlockInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecoveryInput">smsRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecovery">callRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecovery">emailRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutes">passwordAutoUnlockMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookup">passwordDictionaryLookup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstName">passwordExcludeFirstName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastName">passwordExcludeLastName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsername">passwordExcludeUsername</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDays">passwordExpireWarnDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCount">passwordHistoryCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannels">passwordLockoutNotificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttempts">passwordMaxLockoutAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutes">passwordMinAgeMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLength">passwordMinLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercase">passwordMinLowercase</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumber">passwordMinNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbol">passwordMinSymbol</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercase">passwordMinUppercase</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailures">passwordShowLockoutFailures</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLength">questionMinLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecovery">questionRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailToken">recoveryEmailToken</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlock">skipUnlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecovery">smsRecovery</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultAuthProvider`<sup>Required</sup> <a name="defaultAuthProvider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultAuthProvider"></a>

```java
public java.lang.String getDefaultAuthProvider();
```

- *Type:* java.lang.String

---

##### `defaultIncludedGroupId`<sup>Required</sup> <a name="defaultIncludedGroupId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultIncludedGroupId"></a>

```java
public java.lang.String getDefaultIncludedGroupId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `callRecoveryInput`<sup>Optional</sup> <a name="callRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecoveryInput"></a>

```java
public java.lang.String getCallRecoveryInput();
```

- *Type:* java.lang.String

---

##### `emailRecoveryInput`<sup>Optional</sup> <a name="emailRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecoveryInput"></a>

```java
public java.lang.String getEmailRecoveryInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `passwordAutoUnlockMinutesInput`<sup>Optional</sup> <a name="passwordAutoUnlockMinutesInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutesInput"></a>

```java
public java.lang.Number getPasswordAutoUnlockMinutesInput();
```

- *Type:* java.lang.Number

---

##### `passwordDictionaryLookupInput`<sup>Optional</sup> <a name="passwordDictionaryLookupInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookupInput"></a>

```java
public java.lang.Object getPasswordDictionaryLookupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeFirstNameInput`<sup>Optional</sup> <a name="passwordExcludeFirstNameInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstNameInput"></a>

```java
public java.lang.Object getPasswordExcludeFirstNameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeLastNameInput`<sup>Optional</sup> <a name="passwordExcludeLastNameInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastNameInput"></a>

```java
public java.lang.Object getPasswordExcludeLastNameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeUsernameInput`<sup>Optional</sup> <a name="passwordExcludeUsernameInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsernameInput"></a>

```java
public java.lang.Object getPasswordExcludeUsernameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExpireWarnDaysInput`<sup>Optional</sup> <a name="passwordExpireWarnDaysInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDaysInput"></a>

```java
public java.lang.Number getPasswordExpireWarnDaysInput();
```

- *Type:* java.lang.Number

---

##### `passwordHistoryCountInput`<sup>Optional</sup> <a name="passwordHistoryCountInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCountInput"></a>

```java
public java.lang.Number getPasswordHistoryCountInput();
```

- *Type:* java.lang.Number

---

##### `passwordLockoutNotificationChannelsInput`<sup>Optional</sup> <a name="passwordLockoutNotificationChannelsInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannelsInput"></a>

```java
public java.util.List<java.lang.String> getPasswordLockoutNotificationChannelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordMaxAgeDaysInput`<sup>Optional</sup> <a name="passwordMaxAgeDaysInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDaysInput"></a>

```java
public java.lang.Number getPasswordMaxAgeDaysInput();
```

- *Type:* java.lang.Number

---

##### `passwordMaxLockoutAttemptsInput`<sup>Optional</sup> <a name="passwordMaxLockoutAttemptsInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttemptsInput"></a>

```java
public java.lang.Number getPasswordMaxLockoutAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinAgeMinutesInput`<sup>Optional</sup> <a name="passwordMinAgeMinutesInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutesInput"></a>

```java
public java.lang.Number getPasswordMinAgeMinutesInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinLengthInput`<sup>Optional</sup> <a name="passwordMinLengthInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLengthInput"></a>

```java
public java.lang.Number getPasswordMinLengthInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinLowercaseInput`<sup>Optional</sup> <a name="passwordMinLowercaseInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercaseInput"></a>

```java
public java.lang.Number getPasswordMinLowercaseInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinNumberInput`<sup>Optional</sup> <a name="passwordMinNumberInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumberInput"></a>

```java
public java.lang.Number getPasswordMinNumberInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinSymbolInput`<sup>Optional</sup> <a name="passwordMinSymbolInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbolInput"></a>

```java
public java.lang.Number getPasswordMinSymbolInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinUppercaseInput`<sup>Optional</sup> <a name="passwordMinUppercaseInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercaseInput"></a>

```java
public java.lang.Number getPasswordMinUppercaseInput();
```

- *Type:* java.lang.Number

---

##### `passwordShowLockoutFailuresInput`<sup>Optional</sup> <a name="passwordShowLockoutFailuresInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailuresInput"></a>

```java
public java.lang.Object getPasswordShowLockoutFailuresInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `questionMinLengthInput`<sup>Optional</sup> <a name="questionMinLengthInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLengthInput"></a>

```java
public java.lang.Number getQuestionMinLengthInput();
```

- *Type:* java.lang.Number

---

##### `questionRecoveryInput`<sup>Optional</sup> <a name="questionRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecoveryInput"></a>

```java
public java.lang.String getQuestionRecoveryInput();
```

- *Type:* java.lang.String

---

##### `recoveryEmailTokenInput`<sup>Optional</sup> <a name="recoveryEmailTokenInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailTokenInput"></a>

```java
public java.lang.Number getRecoveryEmailTokenInput();
```

- *Type:* java.lang.Number

---

##### `skipUnlockInput`<sup>Optional</sup> <a name="skipUnlockInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlockInput"></a>

```java
public java.lang.Object getSkipUnlockInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smsRecoveryInput`<sup>Optional</sup> <a name="smsRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecoveryInput"></a>

```java
public java.lang.String getSmsRecoveryInput();
```

- *Type:* java.lang.String

---

##### `callRecovery`<sup>Required</sup> <a name="callRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecovery"></a>

```java
public java.lang.String getCallRecovery();
```

- *Type:* java.lang.String

---

##### `emailRecovery`<sup>Required</sup> <a name="emailRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecovery"></a>

```java
public java.lang.String getEmailRecovery();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `passwordAutoUnlockMinutes`<sup>Required</sup> <a name="passwordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutes"></a>

```java
public java.lang.Number getPasswordAutoUnlockMinutes();
```

- *Type:* java.lang.Number

---

##### `passwordDictionaryLookup`<sup>Required</sup> <a name="passwordDictionaryLookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookup"></a>

```java
public java.lang.Object getPasswordDictionaryLookup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeFirstName`<sup>Required</sup> <a name="passwordExcludeFirstName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstName"></a>

```java
public java.lang.Object getPasswordExcludeFirstName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeLastName`<sup>Required</sup> <a name="passwordExcludeLastName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastName"></a>

```java
public java.lang.Object getPasswordExcludeLastName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeUsername`<sup>Required</sup> <a name="passwordExcludeUsername" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsername"></a>

```java
public java.lang.Object getPasswordExcludeUsername();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExpireWarnDays`<sup>Required</sup> <a name="passwordExpireWarnDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDays"></a>

```java
public java.lang.Number getPasswordExpireWarnDays();
```

- *Type:* java.lang.Number

---

##### `passwordHistoryCount`<sup>Required</sup> <a name="passwordHistoryCount" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCount"></a>

```java
public java.lang.Number getPasswordHistoryCount();
```

- *Type:* java.lang.Number

---

##### `passwordLockoutNotificationChannels`<sup>Required</sup> <a name="passwordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannels"></a>

```java
public java.util.List<java.lang.String> getPasswordLockoutNotificationChannels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordMaxAgeDays`<sup>Required</sup> <a name="passwordMaxAgeDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDays"></a>

```java
public java.lang.Number getPasswordMaxAgeDays();
```

- *Type:* java.lang.Number

---

##### `passwordMaxLockoutAttempts`<sup>Required</sup> <a name="passwordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttempts"></a>

```java
public java.lang.Number getPasswordMaxLockoutAttempts();
```

- *Type:* java.lang.Number

---

##### `passwordMinAgeMinutes`<sup>Required</sup> <a name="passwordMinAgeMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutes"></a>

```java
public java.lang.Number getPasswordMinAgeMinutes();
```

- *Type:* java.lang.Number

---

##### `passwordMinLength`<sup>Required</sup> <a name="passwordMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLength"></a>

```java
public java.lang.Number getPasswordMinLength();
```

- *Type:* java.lang.Number

---

##### `passwordMinLowercase`<sup>Required</sup> <a name="passwordMinLowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercase"></a>

```java
public java.lang.Number getPasswordMinLowercase();
```

- *Type:* java.lang.Number

---

##### `passwordMinNumber`<sup>Required</sup> <a name="passwordMinNumber" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumber"></a>

```java
public java.lang.Number getPasswordMinNumber();
```

- *Type:* java.lang.Number

---

##### `passwordMinSymbol`<sup>Required</sup> <a name="passwordMinSymbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbol"></a>

```java
public java.lang.Number getPasswordMinSymbol();
```

- *Type:* java.lang.Number

---

##### `passwordMinUppercase`<sup>Required</sup> <a name="passwordMinUppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercase"></a>

```java
public java.lang.Number getPasswordMinUppercase();
```

- *Type:* java.lang.Number

---

##### `passwordShowLockoutFailures`<sup>Required</sup> <a name="passwordShowLockoutFailures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailures"></a>

```java
public java.lang.Object getPasswordShowLockoutFailures();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `questionMinLength`<sup>Required</sup> <a name="questionMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLength"></a>

```java
public java.lang.Number getQuestionMinLength();
```

- *Type:* java.lang.Number

---

##### `questionRecovery`<sup>Required</sup> <a name="questionRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecovery"></a>

```java
public java.lang.String getQuestionRecovery();
```

- *Type:* java.lang.String

---

##### `recoveryEmailToken`<sup>Required</sup> <a name="recoveryEmailToken" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailToken"></a>

```java
public java.lang.Number getRecoveryEmailToken();
```

- *Type:* java.lang.Number

---

##### `skipUnlock`<sup>Required</sup> <a name="skipUnlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlock"></a>

```java
public java.lang.Object getSkipUnlock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smsRecovery`<sup>Required</sup> <a name="smsRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecovery"></a>

```java
public java.lang.String getSmsRecovery();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyPasswordDefaultConfig <a name="PolicyPasswordDefaultConfig" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_password_default.PolicyPasswordDefaultConfig;

PolicyPasswordDefaultConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .callRecovery(java.lang.String)
//  .emailRecovery(java.lang.String)
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
//  .questionMinLength(java.lang.Number)
//  .questionRecovery(java.lang.String)
//  .recoveryEmailToken(java.lang.Number)
//  .skipUnlock(java.lang.Boolean)
//  .skipUnlock(IResolvable)
//  .smsRecovery(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.callRecovery">callRecovery</a></code> | <code>java.lang.String</code> | Enable or disable voice call recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.emailRecovery">emailRecovery</a></code> | <code>java.lang.String</code> | Enable or disable email password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#id PolicyPasswordDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordAutoUnlockMinutes">passwordAutoUnlockMinutes</a></code> | <code>java.lang.Number</code> | Number of minutes before a locked account is unlocked: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordDictionaryLookup">passwordDictionaryLookup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Check Passwords Against Common Password Dictionary. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeFirstName">passwordExcludeFirstName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeLastName">passwordExcludeLastName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeUsername">passwordExcludeUsername</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the user name must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExpireWarnDays">passwordExpireWarnDays</a></code> | <code>java.lang.Number</code> | Length in days a user will be warned before password expiry: 0 = no warning. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordHistoryCount">passwordHistoryCount</a></code> | <code>java.lang.Number</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordLockoutNotificationChannels">passwordLockoutNotificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>java.lang.Number</code> | Length in days a password is valid before expiry: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxLockoutAttempts">passwordMaxLockoutAttempts</a></code> | <code>java.lang.Number</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinAgeMinutes">passwordMinAgeMinutes</a></code> | <code>java.lang.Number</code> | Minimum time interval in minutes between password changes: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLength">passwordMinLength</a></code> | <code>java.lang.Number</code> | Minimum password length. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLowercase">passwordMinLowercase</a></code> | <code>java.lang.Number</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinNumber">passwordMinNumber</a></code> | <code>java.lang.Number</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinSymbol">passwordMinSymbol</a></code> | <code>java.lang.Number</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinUppercase">passwordMinUppercase</a></code> | <code>java.lang.Number</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordShowLockoutFailures">passwordShowLockoutFailures</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If a user should be informed when their account is locked. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionMinLength">questionMinLength</a></code> | <code>java.lang.Number</code> | Min length of the password recovery question answer. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionRecovery">questionRecovery</a></code> | <code>java.lang.String</code> | Enable or disable security question password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.recoveryEmailToken">recoveryEmailToken</a></code> | <code>java.lang.Number</code> | Lifetime in minutes of the recovery email token. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.skipUnlock">skipUnlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.smsRecovery">smsRecovery</a></code> | <code>java.lang.String</code> | Enable or disable SMS password recovery: ACTIVE or INACTIVE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `callRecovery`<sup>Optional</sup> <a name="callRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.callRecovery"></a>

```java
public java.lang.String getCallRecovery();
```

- *Type:* java.lang.String

Enable or disable voice call recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#call_recovery PolicyPasswordDefault#call_recovery}

---

##### `emailRecovery`<sup>Optional</sup> <a name="emailRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.emailRecovery"></a>

```java
public java.lang.String getEmailRecovery();
```

- *Type:* java.lang.String

Enable or disable email password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#email_recovery PolicyPasswordDefault#email_recovery}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#id PolicyPasswordDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passwordAutoUnlockMinutes`<sup>Optional</sup> <a name="passwordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordAutoUnlockMinutes"></a>

```java
public java.lang.Number getPasswordAutoUnlockMinutes();
```

- *Type:* java.lang.Number

Number of minutes before a locked account is unlocked: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_auto_unlock_minutes PolicyPasswordDefault#password_auto_unlock_minutes}

---

##### `passwordDictionaryLookup`<sup>Optional</sup> <a name="passwordDictionaryLookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordDictionaryLookup"></a>

```java
public java.lang.Object getPasswordDictionaryLookup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Check Passwords Against Common Password Dictionary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_dictionary_lookup PolicyPasswordDefault#password_dictionary_lookup}

---

##### `passwordExcludeFirstName`<sup>Optional</sup> <a name="passwordExcludeFirstName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeFirstName"></a>

```java
public java.lang.Object getPasswordExcludeFirstName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_exclude_first_name PolicyPasswordDefault#password_exclude_first_name}

---

##### `passwordExcludeLastName`<sup>Optional</sup> <a name="passwordExcludeLastName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeLastName"></a>

```java
public java.lang.Object getPasswordExcludeLastName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_exclude_last_name PolicyPasswordDefault#password_exclude_last_name}

---

##### `passwordExcludeUsername`<sup>Optional</sup> <a name="passwordExcludeUsername" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeUsername"></a>

```java
public java.lang.Object getPasswordExcludeUsername();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the user name must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_exclude_username PolicyPasswordDefault#password_exclude_username}

---

##### `passwordExpireWarnDays`<sup>Optional</sup> <a name="passwordExpireWarnDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExpireWarnDays"></a>

```java
public java.lang.Number getPasswordExpireWarnDays();
```

- *Type:* java.lang.Number

Length in days a user will be warned before password expiry: 0 = no warning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_expire_warn_days PolicyPasswordDefault#password_expire_warn_days}

---

##### `passwordHistoryCount`<sup>Optional</sup> <a name="passwordHistoryCount" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordHistoryCount"></a>

```java
public java.lang.Number getPasswordHistoryCount();
```

- *Type:* java.lang.Number

Number of distinct passwords that must be created before they can be reused: 0 = none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_history_count PolicyPasswordDefault#password_history_count}

---

##### `passwordLockoutNotificationChannels`<sup>Optional</sup> <a name="passwordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordLockoutNotificationChannels"></a>

```java
public java.util.List<java.lang.String> getPasswordLockoutNotificationChannels();
```

- *Type:* java.util.List<java.lang.String>

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_lockout_notification_channels PolicyPasswordDefault#password_lockout_notification_channels}

---

##### `passwordMaxAgeDays`<sup>Optional</sup> <a name="passwordMaxAgeDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxAgeDays"></a>

```java
public java.lang.Number getPasswordMaxAgeDays();
```

- *Type:* java.lang.Number

Length in days a password is valid before expiry: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_max_age_days PolicyPasswordDefault#password_max_age_days}

---

##### `passwordMaxLockoutAttempts`<sup>Optional</sup> <a name="passwordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxLockoutAttempts"></a>

```java
public java.lang.Number getPasswordMaxLockoutAttempts();
```

- *Type:* java.lang.Number

Number of unsuccessful login attempts allowed before lockout: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_max_lockout_attempts PolicyPasswordDefault#password_max_lockout_attempts}

---

##### `passwordMinAgeMinutes`<sup>Optional</sup> <a name="passwordMinAgeMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinAgeMinutes"></a>

```java
public java.lang.Number getPasswordMinAgeMinutes();
```

- *Type:* java.lang.Number

Minimum time interval in minutes between password changes: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_min_age_minutes PolicyPasswordDefault#password_min_age_minutes}

---

##### `passwordMinLength`<sup>Optional</sup> <a name="passwordMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLength"></a>

```java
public java.lang.Number getPasswordMinLength();
```

- *Type:* java.lang.Number

Minimum password length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_min_length PolicyPasswordDefault#password_min_length}

---

##### `passwordMinLowercase`<sup>Optional</sup> <a name="passwordMinLowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLowercase"></a>

```java
public java.lang.Number getPasswordMinLowercase();
```

- *Type:* java.lang.Number

If a password must contain at least one lower case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_min_lowercase PolicyPasswordDefault#password_min_lowercase}

---

##### `passwordMinNumber`<sup>Optional</sup> <a name="passwordMinNumber" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinNumber"></a>

```java
public java.lang.Number getPasswordMinNumber();
```

- *Type:* java.lang.Number

If a password must contain at least one number: 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_min_number PolicyPasswordDefault#password_min_number}

---

##### `passwordMinSymbol`<sup>Optional</sup> <a name="passwordMinSymbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinSymbol"></a>

```java
public java.lang.Number getPasswordMinSymbol();
```

- *Type:* java.lang.Number

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_min_symbol PolicyPasswordDefault#password_min_symbol}

---

##### `passwordMinUppercase`<sup>Optional</sup> <a name="passwordMinUppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinUppercase"></a>

```java
public java.lang.Number getPasswordMinUppercase();
```

- *Type:* java.lang.Number

If a password must contain at least one upper case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_min_uppercase PolicyPasswordDefault#password_min_uppercase}

---

##### `passwordShowLockoutFailures`<sup>Optional</sup> <a name="passwordShowLockoutFailures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordShowLockoutFailures"></a>

```java
public java.lang.Object getPasswordShowLockoutFailures();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If a user should be informed when their account is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#password_show_lockout_failures PolicyPasswordDefault#password_show_lockout_failures}

---

##### `questionMinLength`<sup>Optional</sup> <a name="questionMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionMinLength"></a>

```java
public java.lang.Number getQuestionMinLength();
```

- *Type:* java.lang.Number

Min length of the password recovery question answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#question_min_length PolicyPasswordDefault#question_min_length}

---

##### `questionRecovery`<sup>Optional</sup> <a name="questionRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionRecovery"></a>

```java
public java.lang.String getQuestionRecovery();
```

- *Type:* java.lang.String

Enable or disable security question password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#question_recovery PolicyPasswordDefault#question_recovery}

---

##### `recoveryEmailToken`<sup>Optional</sup> <a name="recoveryEmailToken" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.recoveryEmailToken"></a>

```java
public java.lang.Number getRecoveryEmailToken();
```

- *Type:* java.lang.Number

Lifetime in minutes of the recovery email token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#recovery_email_token PolicyPasswordDefault#recovery_email_token}

---

##### `skipUnlock`<sup>Optional</sup> <a name="skipUnlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.skipUnlock"></a>

```java
public java.lang.Object getSkipUnlock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#skip_unlock PolicyPasswordDefault#skip_unlock}

---

##### `smsRecovery`<sup>Optional</sup> <a name="smsRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.smsRecovery"></a>

```java
public java.lang.String getSmsRecovery();
```

- *Type:* java.lang.String

Enable or disable SMS password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password_default#sms_recovery PolicyPasswordDefault#sms_recovery}

---



