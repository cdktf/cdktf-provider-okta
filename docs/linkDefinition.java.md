# `linkDefinition` Submodule <a name="`linkDefinition` Submodule" id="@cdktf/provider-okta.linkDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LinkDefinition <a name="LinkDefinition" id="@cdktf/provider-okta.linkDefinition.LinkDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition okta_link_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.link_definition.LinkDefinition;

LinkDefinition.Builder.create(Construct scope, java.lang.String id)
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
    .associatedDescription(java.lang.String)
    .associatedName(java.lang.String)
    .associatedTitle(java.lang.String)
    .primaryDescription(java.lang.String)
    .primaryName(java.lang.String)
    .primaryTitle(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.associatedDescription">associatedDescription</a></code> | <code>java.lang.String</code> | Description of the associated relationship. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.associatedName">associatedName</a></code> | <code>java.lang.String</code> | API name of the associated link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.associatedTitle">associatedTitle</a></code> | <code>java.lang.String</code> | Display name of the associated link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.primaryDescription">primaryDescription</a></code> | <code>java.lang.String</code> | Description of the primary relationship. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.primaryName">primaryName</a></code> | <code>java.lang.String</code> | API name of the primary link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.primaryTitle">primaryTitle</a></code> | <code>java.lang.String</code> | Display name of the primary link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#id LinkDefinition#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `associatedDescription`<sup>Required</sup> <a name="associatedDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.associatedDescription"></a>

- *Type:* java.lang.String

Description of the associated relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#associated_description LinkDefinition#associated_description}

---

##### `associatedName`<sup>Required</sup> <a name="associatedName" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.associatedName"></a>

- *Type:* java.lang.String

API name of the associated link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#associated_name LinkDefinition#associated_name}

---

##### `associatedTitle`<sup>Required</sup> <a name="associatedTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.associatedTitle"></a>

- *Type:* java.lang.String

Display name of the associated link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#associated_title LinkDefinition#associated_title}

---

##### `primaryDescription`<sup>Required</sup> <a name="primaryDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.primaryDescription"></a>

- *Type:* java.lang.String

Description of the primary relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#primary_description LinkDefinition#primary_description}

---

##### `primaryName`<sup>Required</sup> <a name="primaryName" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.primaryName"></a>

- *Type:* java.lang.String

API name of the primary link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#primary_name LinkDefinition#primary_name}

---

##### `primaryTitle`<sup>Required</sup> <a name="primaryTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.primaryTitle"></a>

- *Type:* java.lang.String

Display name of the primary link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#primary_title LinkDefinition#primary_title}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#id LinkDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LinkDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.link_definition.LinkDefinition;

LinkDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.link_definition.LinkDefinition;

LinkDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.link_definition.LinkDefinition;

LinkDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.link_definition.LinkDefinition;

LinkDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LinkDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LinkDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LinkDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LinkDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LinkDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescriptionInput">associatedDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedNameInput">associatedNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitleInput">associatedTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescriptionInput">primaryDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryNameInput">primaryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitleInput">primaryTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescription">associatedDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedName">associatedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitle">associatedTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescription">primaryDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryName">primaryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitle">primaryTitle</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `associatedDescriptionInput`<sup>Optional</sup> <a name="associatedDescriptionInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescriptionInput"></a>

```java
public java.lang.String getAssociatedDescriptionInput();
```

- *Type:* java.lang.String

---

##### `associatedNameInput`<sup>Optional</sup> <a name="associatedNameInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedNameInput"></a>

```java
public java.lang.String getAssociatedNameInput();
```

- *Type:* java.lang.String

---

##### `associatedTitleInput`<sup>Optional</sup> <a name="associatedTitleInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitleInput"></a>

```java
public java.lang.String getAssociatedTitleInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `primaryDescriptionInput`<sup>Optional</sup> <a name="primaryDescriptionInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescriptionInput"></a>

```java
public java.lang.String getPrimaryDescriptionInput();
```

- *Type:* java.lang.String

---

##### `primaryNameInput`<sup>Optional</sup> <a name="primaryNameInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryNameInput"></a>

```java
public java.lang.String getPrimaryNameInput();
```

- *Type:* java.lang.String

---

##### `primaryTitleInput`<sup>Optional</sup> <a name="primaryTitleInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitleInput"></a>

```java
public java.lang.String getPrimaryTitleInput();
```

- *Type:* java.lang.String

---

##### `associatedDescription`<sup>Required</sup> <a name="associatedDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescription"></a>

```java
public java.lang.String getAssociatedDescription();
```

- *Type:* java.lang.String

---

##### `associatedName`<sup>Required</sup> <a name="associatedName" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedName"></a>

```java
public java.lang.String getAssociatedName();
```

- *Type:* java.lang.String

---

##### `associatedTitle`<sup>Required</sup> <a name="associatedTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitle"></a>

```java
public java.lang.String getAssociatedTitle();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `primaryDescription`<sup>Required</sup> <a name="primaryDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescription"></a>

```java
public java.lang.String getPrimaryDescription();
```

- *Type:* java.lang.String

---

##### `primaryName`<sup>Required</sup> <a name="primaryName" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryName"></a>

```java
public java.lang.String getPrimaryName();
```

- *Type:* java.lang.String

---

##### `primaryTitle`<sup>Required</sup> <a name="primaryTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitle"></a>

```java
public java.lang.String getPrimaryTitle();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LinkDefinitionConfig <a name="LinkDefinitionConfig" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.link_definition.LinkDefinitionConfig;

LinkDefinitionConfig.builder()
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
    .associatedDescription(java.lang.String)
    .associatedName(java.lang.String)
    .associatedTitle(java.lang.String)
    .primaryDescription(java.lang.String)
    .primaryName(java.lang.String)
    .primaryTitle(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedDescription">associatedDescription</a></code> | <code>java.lang.String</code> | Description of the associated relationship. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedName">associatedName</a></code> | <code>java.lang.String</code> | API name of the associated link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedTitle">associatedTitle</a></code> | <code>java.lang.String</code> | Display name of the associated link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryDescription">primaryDescription</a></code> | <code>java.lang.String</code> | Description of the primary relationship. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryName">primaryName</a></code> | <code>java.lang.String</code> | API name of the primary link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryTitle">primaryTitle</a></code> | <code>java.lang.String</code> | Display name of the primary link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#id LinkDefinition#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `associatedDescription`<sup>Required</sup> <a name="associatedDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedDescription"></a>

```java
public java.lang.String getAssociatedDescription();
```

- *Type:* java.lang.String

Description of the associated relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#associated_description LinkDefinition#associated_description}

---

##### `associatedName`<sup>Required</sup> <a name="associatedName" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedName"></a>

```java
public java.lang.String getAssociatedName();
```

- *Type:* java.lang.String

API name of the associated link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#associated_name LinkDefinition#associated_name}

---

##### `associatedTitle`<sup>Required</sup> <a name="associatedTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedTitle"></a>

```java
public java.lang.String getAssociatedTitle();
```

- *Type:* java.lang.String

Display name of the associated link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#associated_title LinkDefinition#associated_title}

---

##### `primaryDescription`<sup>Required</sup> <a name="primaryDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryDescription"></a>

```java
public java.lang.String getPrimaryDescription();
```

- *Type:* java.lang.String

Description of the primary relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#primary_description LinkDefinition#primary_description}

---

##### `primaryName`<sup>Required</sup> <a name="primaryName" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryName"></a>

```java
public java.lang.String getPrimaryName();
```

- *Type:* java.lang.String

API name of the primary link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#primary_name LinkDefinition#primary_name}

---

##### `primaryTitle`<sup>Required</sup> <a name="primaryTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryTitle"></a>

```java
public java.lang.String getPrimaryTitle();
```

- *Type:* java.lang.String

Display name of the primary link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#primary_title LinkDefinition#primary_title}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/link_definition#id LinkDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



